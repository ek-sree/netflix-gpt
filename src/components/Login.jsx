import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckvalidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {NETFLIX_BGI, USER_AVATAR} from "../utils/constant"

const Login = () => {

  const dispatch = useDispatch()

  const [isSignIn, setisSingnIn] = useState(true)

  const [errorMessage, seterrorMessage] = useState(null)

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleSignin = ()=>{
    setisSingnIn(!isSignIn)
  }

  const handleSubmit = ()=>{
    const message = CheckvalidateData(email.current.value,password.current.value)
    seterrorMessage(message)

    if(message)return

    if(!isSignIn){
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          }).catch((error) => {
            seterrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode+" - "+errorMessage)
        });
    }else{
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode+" - "+errorMessage)
        });
      
    }

  }

  return (
    <div>
<Header/> 
        <div className="absolute">
      <img
        src={NETFLIX_BGI}
        alt="Netflix"
        />
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 my-36 mx-auto right-0 left-0 absolute p-12 bg-black text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && (<input type="text" ref={name} placeholder="Name"className="p-4 my-4 w-full rounded-lg text-black"/>)}
            <input type="text" ref={email} placeholder="Email Address"className="p-4 my-4 w-full rounded-lg text-black"/>
            <input type="password" ref={password} placeholder="Password"className="p-4 my-4 w-full rounded-lg text-black"/>
            <p className="text-red-600 font-medium">{errorMessage}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer" onClick={handleSubmit}>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p onClick={handleSignin} className="cursor-pointer">{isSignIn ? "New no netflix ? Sign Up" : "Alredy have an account ? Sign In"}</p>
        </form>
    </div>
  );
};

export default Login;
