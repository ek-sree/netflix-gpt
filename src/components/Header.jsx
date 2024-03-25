import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUSer } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toogleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
      } else {
        dispatch(removeUSer());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGpt = () => {
    dispatch(toogleGptSearchView());
  };

  const handleLanguage=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="Logo" />
      {user && (
        <div className="flex p-5">
          {showGptSearch&&(<select onChange={handleLanguage} className="p-2 bg-gray-900 text-white m-2">
            {SUPPORTED_LANGUAGES.map((languages) => (
              <option key={languages.identifiers} value={languages.identifiers}>
                {languages.name}
              </option>
            ))}
          </select>)}
          <button
            className="py-2 px-4 m-2 text-black rounded-xl opacity-65 font-bold hover:opacity-100 mx-4 my-2 bg-slate-200"
            onClick={handleGpt}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-12 h-12" src={user?.photoURL} alt="user icon" />
          <button
            className="m-2 pl-2 font-bold text-white"
            onClick={handleSignout}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
