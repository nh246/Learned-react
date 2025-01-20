import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        // console.log("auth provider user", user);
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  // updateprofile function

  const updateUserProfile = async (newProfile) => {
    if (currentUser) {
      try {
        await updateProfile(currentUser, newProfile);
        setCurrentUser((prevUser) => ({ ...prevUser, ...newProfile }));
      } catch (error) {
        console.log("this is an error", error.massage);
        throw error;
      }
    } else {
      throw new Error("no user if found currently signed in ");
    }
  };



  const value = { currentUser, loading, updateUserProfile };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
