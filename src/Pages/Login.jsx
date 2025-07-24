// Login.jsx or firebase.auth.js
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-10">
      <h1 className="text-3xl">Login with goole</h1>
      <button
        className="bg-black hover:opacity-80 rounded-2xl text-white font-bold py-3 px-4 "
        onClick={handleGoogleLogin}
      >
        Login with goole
      </button>


      {
        user && (
          <div>
            <h1>User Name: {user.displayName}</h1>
            <h1>User Email: {user.email}</h1>
          </div>
        )
      }
    </div>
  );
};

export default Login;
