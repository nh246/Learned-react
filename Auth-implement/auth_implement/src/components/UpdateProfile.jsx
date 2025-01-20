import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function UpdateProfile() {
  const { currentUser, updateUserProfile } = useAuth();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [successMassage, setSuccessMessage] = useState("");
  const [errorMassage, setErrorMessage] = useState("");

  console.log(name, photoURL);

  // handleUpdateProfile
  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      await updateUserProfile({
        displayName: name || currentUser.displayName,
        photoURL: photoURL || currentUser.photoURL,
      });
      alert("profile updated successfully");
      setSuccessMessage("profile updated successfully");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Faild to update profile");
      setSuccessMessage("");
    }
  };

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Update user Profile</h1>
      <p className="text-lg">
        Current Display Name: {currentUser?.displayName}
      </p>
      {currentUser?.photoURL ? (
        <img src={currentUser?.photoURL} alt="photo url" />
      ) : (
        <p className="text-lg text-red-300">No Photo</p>
      )}

      {/* update profile form  */}

      <form
        className="shadow p-4 max-w-sm space-y-2"
        onSubmit={handleUpdateProfile}
      >
        <div className="space-y-2">
          <label className="block">New Display Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border"
            type="text"
            id="name"
            name="name"
            placeholder="new display name"
          />
        </div>
        <div className="space-y-2">
          <label className="block">New Image URL:</label>
          <input
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="p-2 border"
            type="text"
            id="photoURL"
            name="photoURL"
            placeholder="new photoURL"
          />
        </div>
        <button
          className="bg-blue-500 text-white font-medium px-6 py-2 rounded hover:bg-blue-800"
          type="submit"
        >
          Update Profile
        </button>

        {successMassage && (
          <p className="text-green-500 text-sm italic">{successMassage}</p>
        )}
        {errorMassage && (
          <p className="text-red-500 text-sm italic">{errorMassage}</p>
        )}
      </form>
    </div>
  );
}

export default UpdateProfile;
