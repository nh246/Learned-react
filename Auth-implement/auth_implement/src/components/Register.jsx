import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from "./../firebase/firebase.config";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[ massage, setMassage] = useState("");
  // console.log(email,password);
  const navigate = useNavigate();

  const auth = getAuth(app);

  // handle registration
  const handleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        sendEmailVerification(user)
        .then(() => {

          // Email verification sent!
          setMassage("Registration successfull and a verification email is sent to your email");
          // ...
          console.log("email verification sent", user.email);
        })
        .catch((error) => {
          console.log("erron in varification sending",error.massage);
        })

        // optional for navigating 

        setTimeout(() => {
          alert("registration success");
          navigate("/login");
        }, 5000)
       
        // console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  //   console.log(auth);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {
          massage && <h2 className="text-2xl font-bold text-center text-gray-800">
          {massage}
        </h2>
        }
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Please Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
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

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
          >
            SignUp
          </button>
        </form>

        {/* social login  */}

        <div className="text-center space-y-4">
          <p className="text-center text-gray-600 text-sm">Or signUp with</p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center px-4 py-2 space-x-2 text-white rounded bg-red-500 hover:bg-red-600">
              <FaGoogle />
              <span>Google</span>
            </button>
            <button className="flex items-center px-4 py-2 space-x-2 text-white rounded bg-blue-500 hover:bg-blue-600">
              <FaFacebook />
              <span>Facebook</span>
            </button>
            <button className="flex items-center px-4 py-2 space-x-2 text-white rounded bg-gray-800 hover:bg-gray-900">
              <FaGithub />
              <span>Github</span>
            </button>
          </div>
        </div>

        <p className="text-center text-gray-600 text-sm mt-2">
          Already have an account? Please
          <Link to="/login" className="text-blue-600 hover:underline">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
