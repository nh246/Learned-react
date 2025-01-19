import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const AuthContext = createContext();
const auth = getAuth(app);
export const useAuth =()=> useContext(AuthContext);

export const AuthProvider = ({ childern }) => {
    const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("auth provider user", user);
        setCurrentUser(user);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  
  const value = {currentUser};
  return <AuthContext.Provider value={value}>{childern}</AuthContext.Provider>;
};
