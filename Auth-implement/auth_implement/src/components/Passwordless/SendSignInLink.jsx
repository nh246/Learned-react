import { useState } from "react";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import app from "../../firebase/firebase.config";


function SendSignInLink() {


  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")

  const auth = getAuth(app);

  const actionCodeSettings = {
    url: 'http://localhost:5173/finished-sign-up',
    handleCodeInApp: true,
  }

  // handleSendSignInLink

  const handleSendSignInLink = async (e)=>{
    e.preventDefault();
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      window.localStorage.setItem("emailForSignIn", email);
      setMessage("Sign in Email sent successfully")
    } catch (error) {
      console.error("Error in sending email link",error.message);
      setMessage("Error in sending email link")
    }

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 my-4">
          Sign in with Email Link
        </h2>

        {
          message && <p className="p-2 text-center text-blue-600" >{message}</p>
        }
        <form onSubmit={handleSendSignInLink} className="space-y-4">
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
            Send Sign-in Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default SendSignInLink;
