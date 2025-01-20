import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { useNavigate } from "react-router";



function FinishSignIn() {

      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("")
      
      const auth = getAuth(app);

      const navigate = useNavigate()

      useEffect(()=>{

        if(!isSignInWithEmailLink(auth, window.location.href)){
            setMessage("Invalid or expired sign-in link");
            return;
        }

      },[])

    //   handleCompleteSignIn

    const handleCompleteSignIn =async (e)=>{
        e.preventDefault();

        const storedEmail = window.localStorage.getItem('emailForSignIn');
        const emailToUse = email || storedEmail;

        if(!emailToUse){
            setMessage("No email found")
            return
        }

        try {
            const result = await signInWithEmailLink(auth, email, window.location.href)
            setMessage("Sign in successfull")
            window.localStorage.removeItem('emailForSignIn');
            navigate("/dashboard");
        } catch (error) {
            console.error("Error in completing sign in",error.message);
            setMessage("Error in completing sign in")
        }

    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 my-4">
          Complete Sign-in
        </h2>

        {
          message && <p className="p-2 text-center text-blue-600" >{message}</p>
        }
        <form onSubmit={handleCompleteSignIn} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Email Address:{" "}
            </label>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              required
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Complete Sign-in
          </button>
        </form>
      </div>
    </div>
  )
}

export default FinishSignIn