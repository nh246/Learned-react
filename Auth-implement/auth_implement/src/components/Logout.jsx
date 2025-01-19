import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

function Logout() {
    const auth = getAuth(app);

    const handleLogout = () =>{
        // console.log("logout button clicked");
        signOut(auth).then(() => {
            // Sign-out successful.
            alert("Logout Successfull");
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
     }

  return (
    <div className="my-8" >
        <button onClick={handleLogout} className="px-5 py-2 bg-red-600 text-white font-semibold rounded" >Logout</button>
    </div>
  )
}

export default Logout