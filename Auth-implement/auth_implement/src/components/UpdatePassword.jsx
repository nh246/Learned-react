import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import app from "./../firebase/firebase.config";
import { getAuth, updatePassword } from "firebase/auth";
import { useNavigate } from "react-router";
function UpdatePassword() {
  const [massage, setMassage] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPasswrd] = useState(false);

   const navigate = useNavigate();
  const auth = getAuth(app);

  // handlePasswordUpdate

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    // console.log(newPassword,confirmPassword)

    if (newPassword !== confirmPassword) {
      setMassage("new password and confirm password not matched");
      return;
    }
    if (newPassword.length < 6) {
      setMassage("password must be at least 6 character");
      return;
    }

    const user = auth.currentUser;

    console.log(user);

    if (user) {
      // try {
      //  await updatePassword(user, newPassword);
      //   setMassage("Password updated successfully");
      //   navigate("/");
      // } catch (error) {
      //   console.log(error.message);
      //   setMassage("failed to update please try again",error.message);
      // }

      await updatePassword(user, newPassword).then(() => {
        // Update successful.
        setMassage("Password updated successfully");
        navigate("/");
      }).catch((error) => {
        // An error ocurred
        // ...
        console.log(error.message);
        setMassage("failed to update please try again",error.message);
      });

    } else {
      setMassage("user not found");
      alert("Please login ");
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg">
        <h2 className="font-bold text-3xl text-gray-800 text-center">
          Update Password
        </h2>
        {massage && (
          <p
            className={` p-2 text-center ${
              massage.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {massage}
          </p>
        )}

        <form onSubmit={handlePasswordUpdate} className="space-y-4">
          {/* this new password  */}
          <div className="relative">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                New Password:
              </label>
              <input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-400 focus:border-transparent"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter New Password"
              />
            </div>
            <div
              onClick={() => setShowPasswrd(!showPassword)}
              className="absolute bottom-3 right-0 flex items-center pr-3 cursor-pointer"
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-600" />
              ) : (
                <FaEye className="text-gray-600" />
              )}
            </div>
          </div>

          {/* this is confirm password */}

          <div className="relative">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Confirm Password:
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-400 focus:border-transparent"
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <div
              onClick={() => setShowPasswrd(!showPassword)}
              className="absolute bottom-3 right-0 flex items-center pr-3 cursor-pointer"
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-600" />
              ) : (
                <FaEye className="text-gray-600" />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdatePassword;
