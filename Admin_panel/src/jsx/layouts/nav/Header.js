import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
/// Scroll
//import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
//import profile from "../../../images/profile/pic1.jpg";
//import avatar from "../../../images/avatar/1.jpg";
//import { Dropdown } from "react-bootstrap";
//import LogoutPage from './Logout';
//import RightSideBar from './RightSideBar';

import LogoutPage from "./Logout";

import United from "../../../images/United.png";
import avatar from "../../../images/avatar/1.jpg";
import profile from "../../../images/profile/pic1.jpg";

const NotificationBlog = ({ classChange }) => {
  return (
    <>
      <li>
        <div className="timeline-panel">
          <div className="media me-2">
            <img alt="images" width={50} src={avatar} />
          </div>
          <div className="media-body">
            <h6 className="mb-1">Dr sultads Send you Photo</h6>
            <small className="d-block">29 July 2022 - 02:26 PM</small>
          </div>
        </div>
      </li>
      <li>
        <div className="timeline-panel">
          <div className={`media me-2 ${classChange}`}>KG</div>
          <div className="media-body">
            <h6 className="mb-1">Resport created successfully</h6>
            <small className="d-block">29 July 2022 - 02:26 PM</small>
          </div>
        </div>
      </li>
      <li>
        <div className="timeline-panel">
          <div className={`media me-2 ${classChange}`}>
            <i className="fa fa-home" />
          </div>
          <div className="media-body">
            <h6 className="mb-1">Reminder : Treatment Time!</h6>
            <small className="d-block">29 July 2022 - 02:26 PM</small>
          </div>
        </div>
      </li>
    </>
  );
};

const Header = ({ onNote }) => {
  const [rightSelect, setRightSelect] = useState("Eng");
  //For fix header
  const [headerFix, setheaderFix] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setheaderFix(window.scrollY > 50);
    });
  }, []);

  //const [searchBut, setSearchBut] = useState(false);
  var path = window.location.pathname.split("/");
  var name = path[path.length - 1].split("-");
  var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
  var finalName = filterName.includes("app")
    ? filterName.filter((f) => f !== "app")
    : filterName.includes("ui")
    ? filterName.filter((f) => f !== "ui")
    : filterName.includes("uc")
    ? filterName.filter((f) => f !== "uc")
    : filterName.includes("basic")
    ? filterName.filter((f) => f !== "basic")
    : filterName.includes("jquery")
    ? filterName.filter((f) => f !== "jquery")
    : filterName.includes("table")
    ? filterName.filter((f) => f !== "table")
    : filterName.includes("page")
    ? filterName.filter((f) => f !== "page")
    : filterName.includes("email")
    ? filterName.filter((f) => f !== "email")
    : filterName.includes("ecom")
    ? filterName.filter((f) => f !== "ecom")
    : filterName.includes("chart")
    ? filterName.filter((f) => f !== "chart")
    : filterName.includes("editor")
    ? filterName.filter((f) => f !== "editor")
    : filterName;
  return (
    <div className={`header ${headerFix ? "is-fixed" : ""}`}>
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div
                className="dashboard_bar"
                style={{ textTransform: "capitalize" }}
              >
                {finalName.join(" ").length === 0
                  ? "Dashboard"
                  : finalName.join(" ") === "dashboard dark"
                  ? "Dashboard"
                  : finalName.join(" ")}
              </div>
            </div>
            <div className="navbar-nav header-right">
              <div className="nav-item d-flex align-items-center">
                <div className="input-group search-area">
                  <span className="input-group-text">
                    <Link to={"#"}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
                          fill="var(--secondary)"
                        />
                      </svg>
                    </Link>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here..."
                  />
                </div>
              </div>
              <div className="" style={{ margin: 17 }}>
                <ul>
                  <Dropdown
                    as="li"
                    className="nav-item dropdown header-profile"
                  >
                    <Dropdown.Toggle
                      variant=""
                      as="a"
                      className="nav-link i-false c-pointer"
                    >
                      <img src={profile} width={20} alt="" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      align="right"
                      className="dropdown-menu dropdown-menu-end"
                    >
                      <Link to="/app-profile" className="dropdown-item ai-icon">
                        <svg
                          id="icon-user1"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary me-1"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                        <span className="ms-2">Profile </span>
                      </Link>
                      <Link to="/email-inbox" className="dropdown-item ai-icon">
                        <svg
                          id="icon-inbox"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-success me-1"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <span className="ms-2">Inbox </span>
                      </Link>
                      <LogoutPage />
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
