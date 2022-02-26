import React from "react";
import "./Deashboard.css";
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
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
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
