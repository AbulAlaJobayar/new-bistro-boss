const express=require('express');
const app=express();
const cors = require('cors');
var jwt = require('jsonwebtoken');
require('dotenv').config()
const port=process.env.PORT || 5000;



// middleware

app.use(cors())
app.use(express.json())
const verifyJWT=(req,res,next)=>{
  const authorization=req.headers.authorization;
  if(!authorization){
  return res.status(401).send({error:true, message:'unauthorized access '})
  }
  // bearer token
  const token=authorization.split(' ')[1];
  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(error,decoded)=>{
if(error){
  return res.status(401).send({error:true, message:'unauthorized access'})
}
req.decoded=decoded;
next()
  })

}


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ph1akes.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

const userCollection=client.db("bistroBossDb").collection("user");
const menuCollection=client.db("bistroBossDb").collection("menu");
const cartCollection=client.db("bistroBossDb").collection("carts");
 app.post('/jwt',(req,res)=>{
  const user=req.body;
  const token=jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
  res.send({token})

 })
// user Collection
app.get('/users',async(req,res)=>{
const result= await userCollection.find().toArray();
res.send(result)
})
app.post('/users',async(req,res)=>{
  const user=req.body
  const query={email:user.email}
  const existingUser=await userCollection.findOne(query);
  if(existingUser){
    return res.send({message:'user already exist'})
  }
  const result=await userCollection.insertOne(user);
  res.send(result)

})
app.patch('/users/admin/:id', async(req,res)=>{
  const id = req.params.id;
  const query = { _id : new ObjectId(id)};
  const updateDoc = {
    $set: {
     role: 'admin'
    },
  };
const result= await userCollection.updateOne(query,updateDoc)
res.send(result)
})
app.delete('/users/admin/:id',async(req,res)=>{
  const id =req.params.id;
  const query={_id:new ObjectId(id)};
  const result= await userCollection.deleteOne(query);
  res.send(result)
})

// menu Collection
app.get('/menu',async(req,res)=>{
const result =await menuCollection.find().toArray();
res.send(result)
})
// cart collection
app.get('/carts',verifyJWT, async(req,res)=>{
  const email=req.query.email;
  if(!email){
    res.send([])
  }
  const decodedEmail=req.decoded.email;
  if(email !==decodedEmail){
    return res.status(403).send({error:true, message:'forbidden access'})
  }
  const result= await cartCollection.find({email:email}).toArray();
  res.send(result)
})


app.post('/carts',async(req,res)=>{
  const result= await cartCollection.insertOne(req.body);
  res.send(result)
})
app.delete("/carts/:id",async(req,res)=>{
 const id =req.params.id;
 const query={_id:new ObjectId(id)} 
 const result= await cartCollection.deleteOne(query);
 res.send(result)
})
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('boss is running')
})
app.listen(port,()=>{
    console.log(`bistro boss is running on port ${port}`)
})