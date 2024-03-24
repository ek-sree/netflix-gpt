import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckvalidateData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";


const Login = () => {

  const [isSignIn, setisSingnIn] = useState(true)

  const [errorMessage, seterrorMessage] = useState(null)

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
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode+" - "+errorMessage)
        });
    }else{
      
    }

  }

  return (
    <div>
<Header/> 
        <div className="absolute">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="Netflix"
        />
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 my-36 mx-auto right-0 left-0 absolute p-12 bg-black text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && (<input type="text" placeholder="Name"className="p-4 my-4 w-full rounded-lg text-black"/>)}
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
