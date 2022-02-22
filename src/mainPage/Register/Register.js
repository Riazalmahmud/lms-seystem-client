import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase.js";
const Register = () => {
  const [registerLoad, setRegisterLoad] = useState({});
  const { registerUser, googleSignIn, user } = useFirebase();
  console.log(registerLoad);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...registerLoad };
    newData[field] = value;
    setRegisterLoad(newData);
  };
  const handleSubmi = (e) => {
    if (registerLoad.password !== registerLoad.password2) {
      <alert severity="warning">password din't match !</alert>;
      return;
    }
    registerUser(registerLoad.email, registerLoad.password, registerLoad.name);
    e.preventDefault();
  };
  return (
    <div>
      <div className="container">
        <div className="w-50 text-center mx-auto shadow-lg p-3 rounded mb-5 mt-5 ">
          <h4 className="fw-bold">Register form</h4>
          <form onSubmit={handleSubmi} className="login-design">
            <Form.Control
              type="text"
              name="name"
              onBlur={handleOnBlur}
              placeholder="Enter Name"
              className="bg-transparent mt-3"
            />

            <Form.Control
              type="email"
              name="email"
              onBlur={handleOnBlur}
              placeholder="Enter email"
              className="bg-transparent mt-3"
            />

            <Form.Control
              type="password"
              name="password"
              onBlur={handleOnBlur}
              placeholder="Enter password"
              className="bg-transparent mt-3"
            />

            <Form.Control
              type="password"
              name="password2"
              onBlur={handleOnBlur}
              placeholder="Conform password"
              className="bg-transparent mt-3"
            />

            <button type="submit" className="mt-3">
              Register
            </button>
          </form>
          <p className="my-3">or signUp</p>
          <NavLink style={{ textDecoration: "none" }} to="/login">
            <Button variant="text">already Register ? Please login</Button>
          </NavLink>
          <br />
          <Button variant="outline-secondary" onClick={googleSignIn}>
            SignIn with google
          </Button>{" "}
          <br />
          {user?.email && (
            <alert severity="success"> Successfully Registration </alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
