import React from "react";
import brand from "../../images/BrandLogo.png";
import "./Deashboard.css";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { FaHouseUser, FaUser, FaUserGraduate } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Home from "../../mainPage/Home/Home.js";
import About from "../../mainPage/About/About.js";
import FlileUpolad from "../../mainPage/FlileUpolad/FlileUpolad.js";
import MakeUser from "../../mainPage/MakeUser/MakeUser.js";
import OverView from "../../mainPage/OverView/OverView.js";
import OlineClass from "../../mainPage/OlineClass/OlineClass.js";
import useFirebase from "../../Hooks/useFirebase.js";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user, logOut } = useFirebase();
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

      <div className="container-fluid navigation-part">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-12 header-style bg-light shadow-lg p-3 mb-5 bg-body rounded sidebar-nav">
            <Link to={`${url}/home`}>
              <FaHouseUser /> HOME
            </Link>
            <Link to={`${url}/about`}>
              <FaUser /> about
            </Link>
            <Link to={`${url}/FlileUpolad`}>
              <AiOutlineFileDone /> Flile Upolad
            </Link>
            <Link to={`${url}/MakeUser`}>
              <FaUserAlt /> MakeUser
            </Link>
            <Link to={`${url}/OverView`}>
              <BsStackOverflow /> Over View
            </Link>
            <Link to={`${url}/OlineClass`}>
              <FaUserGraduate /> Oline Class
            </Link>
          </div>
          <div className="col-lg-9 col-md-9 col-12 bg-light ">
            <Switch>
              <Route exact path={path}>
                <Home></Home>
              </Route>
              <Route path={`${path}/about`}>
                <About />
              </Route>
              <Route path={`${path}/home`}>
                <Home />
              </Route>
              <Route path={`${path}/FlileUpolad`}>
                <FlileUpolad />
              </Route>
              <Route path={`${path}/MakeUser`}>
                <MakeUser />
              </Route>
              <Route path={`${path}/OverView`}>
                <OverView />
              </Route>
              <Route path={`${path}/OlineClass`}>
                <OlineClass />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
