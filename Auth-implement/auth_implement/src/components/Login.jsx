import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FacebookAuthProvider, getAuth, GithubAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  // console.log(email, password);


  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Login Successfull");
    // console.log(user);
    navigate("/");

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    setError("please input correct email and password");
  });
  };

  // handleGoogleLogin

  const handleGoogleLogin = ()=>{
    // console.log("google login")

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    
  .then((result) => {
    const user = result.user;
  console.log("google login successful ",user)
  navigate("/");
  }).catch((error) => {
    console.log("google login failed",error);
  });
  }

  //handleFacebookLogin

  const handleFacebookLogin =()=>{
    // console.log("facebook is clicked")

    const provider = new FacebookAuthProvider();

    signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    console.log("facebook login successful ",user)
    navigate("/");
  })
  .catch((error) => {
    console.log("facebook login failed",error);
  });

  }

  //handleGithubLogin

  const handleGithubLogin = ()=>{
    // console.log("github login")

    const githubProvider = new GithubAuthProvider();

    signInWithPopup(auth, githubProvider)
  .then((result) => {

    const user = result.user;

    console.log("github login successful ",user)
    navigate("/");
   
  }).catch((error) => {
    // Handle Errors here.
    console.log("this is error",error);
  });



  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Please Login
      </h2>

      {/* login form  */}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium text-sm mb-2">
            Email:{" "}
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium text-sm mb-2">
            Password:{" "}
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

          {
            error && <p className="text-red-600 text-italic">{error}</p>
          }

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
        >
          SignUp
        </button>
      </form>

      {/* social login  */}


      <div className="text-center space-y-4" >
        <p className="text-center text-gray-600 text-sm" >Or login with</p>
        <div className="flex justify-center space-x-4">
          <button onClick={handleGoogleLogin} className="flex items-center px-4 py-2 space-x-2 text-white rounded bg-red-500 hover:bg-red-600"><FaGoogle /><span>Google</span></button>
          <button onClick={handleFacebookLogin} className="flex items-center px-4 py-2 space-x-2 text-white rounded bg-blue-500 hover:bg-blue-600" ><FaFacebook /><span>Facebook</span></button>
          <button onClick={handleGithubLogin} className="flex items-center px-4 py-2 space-x-2 text-white rounded bg-gray-800 hover:bg-gray-900" ><FaGithub /><span>Github</span></button>
        </div>
      </div>

      {/* auth text  */}
      <p className="text-center text-gray-600 text-sm mt-2">
        Do not have an account? Please
        <Link to="/register" className="text-blue-600 hover:underline">
          SignUp
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Login