import React from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth.js";
import brand from "../../images/BrandLogo.png";
import { Link } from "react-router-dom";
const Novigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav>
        <Navbar
          bg="light"
          expand="lg"
          className="shadow-lg p-3 mb-5 bg-body rounded"
        >
          <Container fluid>
            <Navbar.Brand href="#" className="w-25">
              <img
                src={brand}
                alt="barnd image"
                className="img-fluid"
                width={"100px"}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Navbar.Collapse className="justify-content-end nav-style">
                {user?.email ? (
                  <Navbar.Text>
                    <img
                      className="rounded-circle img-fluid"
                      width={"50px"}
                      height={"50px"}
                      src={user.photoURL}
                      alt=""
                    />{" "}
                    <a href="#login" onClick={logOut}>
                      LogOut
                    </a>
                  </Navbar.Text>
                ) : (
                  <Navbar.Text>
                    <Link to="/login"> Login</Link>
                  </Navbar.Text>
                )}
                <Link to="/register"> Register</Link>
              </Navbar.Collapse>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </div>
  );
};

export default Novigation;
