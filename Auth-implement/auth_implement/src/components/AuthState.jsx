import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";

function AuthState() {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = currentUser.uid;
        // console.log(currentUser);
        setUser(currentUser);

        // console.log(uid);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("user not found");
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return <div>{user ? <p>Welcome! , {user?.email} </p> : <p>Please login here.</p>}</div>;
}

export default AuthState;
