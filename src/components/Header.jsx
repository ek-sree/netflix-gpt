import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUSer } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constant';


const Header = () => {
  const navigate = useNavigate() 

  const dispatch = useDispatch()

  const user = useSelector((store)=>store.user)

  const handleSignout=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUSer());
        navigate("/")
      }
    });
    
    return()=>unsubscribe()
  }, []);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={LOGO_URL} alt="Logo" />
   {user &&(<div className='flex p-5'>
      <img className='w-12 h-12' src={user?.photoURL} alt="user icon" />
    <button className='m-2 pl-2 font-bold text-white' onClick={handleSignout}>Sign out</button>
    </div>)}
    </div>
  )
}

export default Header