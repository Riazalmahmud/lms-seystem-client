import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import initializeFirebase from "../firebase/initializeFirebase.js";
import { useEffect } from "react";
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const googleSignIn = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.massage);
      })
      .finally(() => setIsLoading(false));
  };

  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  const signInEmailPassword = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
        setIsLoading(false);
      }
    });
    return () => unSubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser("");
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/userCollect", {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  };

  return {
    user,
    googleSignIn,
    registerUser,
    signInEmailPassword,
    logOut,
    isLoading,
    error,
  };
};

export default useFirebase;
