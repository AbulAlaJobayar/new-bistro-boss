import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

import { app } from "../firebase/firebase.config";
import axios from 'axios';
const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const sendEmail=()=>{
   return sendEmailVerification(auth.currentUser)
  }
  const updateUserProfile=(name,photoURL)=>{
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoURL
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        axios.post('http://localhost:5000/jwt',{email:currentUser.email})
        .then(data=>{
          console.log(data.data.token)
          localStorage.setItem('access_token',data.data.token)
        })
      }else{
        localStorage.removeItem('access-token')
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const AuthInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    sendEmail,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
