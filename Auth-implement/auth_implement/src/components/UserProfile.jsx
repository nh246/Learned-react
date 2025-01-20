import { Link } from "react-router"
import { useAuth } from "../context/AuthContext"

function UserProfile() {
    const {currentUser} = useAuth()
    // console.log("This from user profile",currentUser)
  return (
    <div className="h-screen flex items-center justify-center">
        <div className=" max-w-sm mx-auto shadow-sm rounded-md py-12 px-8 space-y-4">
         <h1 className="text-3xl font-bold" >User Profile Card</h1>
         <h2>Welcome, {currentUser?.displayName || "User"}</h2>
        <div className="space-y-2 mb-2" >
            <p className="text-sm" >Email: {currentUser?.email}</p>
            {
                currentUser?.photoURL && <img src={currentUser?.photoURL} alt="photo url" />
            }
            <p className="text-sm">Email Verified:{currentUser?.emailVerified ? "Yes" : "No" }</p>
            <p className="text-sm" >User ID: {currentUser?.uid}</p>
        </div>


          <div>
          <Link className="text-white bg-blue-500 rounded py-2 px-4" to={"/updateuser"} >Edit Profile</Link>
          </div>

        </div>

    </div>
  )
}

export default UserProfile