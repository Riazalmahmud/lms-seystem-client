import React from "react";
import { FaUserAlt, FaCarAlt } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GrDocumentUser } from "react-icons/gr";
import UserObserved from "../../Dashboard/Chart/UserObserved/UserObserved.js";
import CircaleChirt from "../../Dashboard/Chart/CircaleChirt/CircaleChirt.js";
import TimeObsered from "../../Dashboard/Chart/TimeObsered/TimeObsered.js";
import { Link } from "react-router-dom";
import { AiOutlineFileDone } from "react-icons/ai";
import "./OverView.css";
const OverView = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-3 col-md-3 col-12">
            <div className="total-user d-flex justify-content-around shadow-lg p-3 mb-5 bg-body rounded ">
              <div className="user-icon">
                <FaUserAlt size={"30px"} className="user-icon-style" />
              </div>
              <div className="number-total">
                <h4> 01111</h4>
                <p>Total user</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="total-user d-flex justify-content-around shadow-lg p-3 mb-5 bg-body rounded ">
              <div className="user-icon">
                <AiOutlineUsergroupAdd
                  size={"30px"}
                  className="user-icon-style"
                />
              </div>
              <div className="number-total">
                <h4> 01111</h4>
                <p>Available User</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="total-user d-flex justify-content-around shadow-lg p-3 mb-5 bg-body rounded ">
              <div className="user-icon">
                <GrDocumentUser size={"30px"} className="user-icon-style" />
              </div>
              <div className="number-total">
                <h4> 01111</h4>
                <p>Avg Trend cost</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="total-user d-flex justify-content-around shadow-lg p-3 mb-5 bg-body rounded ">
              <div className="user-icon">
                <FaCarAlt size={"30px"} className="user-icon-style" />
              </div>
              <div className="number-total">
                <h4> 01111</h4>
                <p>Total user</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-8 col-12">
            <div className="outpatent">
              <p className="fw-bold"> Out user Trend </p>
              <UserObserved></UserObserved>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12">
            <CircaleChirt></CircaleChirt>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12">
            <div className="outpatent">
              <p className="fw-bold"> Out user Trend </p>
              <TimeObsered></TimeObsered>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12 shadow-lg p-3 mb-5 bg-body rounded overView-menu">
            <Link to="/fileUpload">
              <AiOutlineFileDone /> Division
            </Link>
            <Link to="/fileUpload">
              <AiOutlineFileDone /> New User
            </Link>
            <Link to="/fileUpload">
              <AiOutlineFileDone /> Old user
            </Link>
            <Link to="/fileUpload">
              <AiOutlineFileDone /> total admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
