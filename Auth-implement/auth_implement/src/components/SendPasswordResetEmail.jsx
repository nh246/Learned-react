import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";

function SendPasswordResetEmail() {
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const auth = getAuth(app);
//   handlePasswordReset

    const handlePasswordReset = async (e)=>{
        e.preventDefault();

        if(!email){
            setMassage("Please Enter your email address")
            setIsSuccess(false);
            return;
        }

        try {
            await  sendPasswordResetEmail(auth, email)
            .then(() => {
              // Password reset email sent!
              // ..
              setMassage("Password reset email sent successfully");
              setIsSuccess(true);
          
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
            });
        } catch (error) {
            console.error(error.message);
            setMassage("Failed to send password reset email");
            setIsSuccess(false);
        }


    }





  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Reset Your Password{" "}
        </h2>
        {massage && (
          <p
            className={`p-2 text-center rounded-md m-2 ${isSuccess ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100"}  `}
          >
            {massage}
          </p>
        )}
        <form className="space-y-4" onSubmit={handlePasswordReset}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600 ">
              Email address:
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
          >
             Send Reset Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default SendPasswordResetEmail;
