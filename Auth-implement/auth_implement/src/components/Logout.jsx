import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useAuth } from "../context/AuthContext";

function Logout() {
  const { currentUser } = useAuth();
  // console.log("This from logout", currentUser);

  const auth = getAuth(app);
  const handleLogout = () => {
    // console.log("logout button clicked");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Logout Successfull");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="my-8">
      <p className="font-semibold mb-2">User: {currentUser?.displayName || "Not set yet"}</p>
      <button
        onClick={handleLogout}
        className="px-5 py-2 bg-red-600 text-white font-semibold rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
