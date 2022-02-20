import React from "react";
import useFirebase from "../../Hooks/useFirebase.js";

const Contact = () => {
  const { user, googleSignIn, logOut } = useFirebase();
  return (
    <div>
      <button onClick={googleSignIn}> gooogle sign in</button>
    </div>
  );
};

export default Contact;
