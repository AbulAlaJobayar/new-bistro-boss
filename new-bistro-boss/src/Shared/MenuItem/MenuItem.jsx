import Container from "../Container/Container";

// eslint-disable-next-line react/prop-types
const MenuItem = ({ item }) => {
    // eslint-disable-next-line react/prop-types
    const {image, name, price, recipe} = item
    return (
        <>
        <Container>
        <div className='flex space-x-2 py-8'>
            <img style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="images" className='w-[120px] border-2' />
            <div>
                <h3 className='uppercase'>{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500 '>${price}</p>
        </div>
        </Container>
       
        </>
    );
};

export default MenuItem;