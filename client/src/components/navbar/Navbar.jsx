import { Link } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <div className="navbarContainer">
        <div>
          <ul className="navbarLeft">
            <li className="navbarLeft">
              <i class="fa fa-align-left" aria-hidden="true"></i>

              <img
                src="https://perfexcrm.com/demo/uploads/company/logo.png"
                alt=""
              />
            </li>
          </ul>
        </div>

        <ul className="navbarCenter">
          <li className="navbarSearchBox">
            <input
              className="navbarSearchInput"
              type="search"
              placeholder="Search..."
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </li>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <i class="fa fa-search searchIcon fa-lg" aria-hidden="true"></i>
          </li>
        </ul>

        <div>
          <ul className="navbarRight">
            <li>
              <Link
                to="/knowledgeBase"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span className="navbarRightKnowledgeBase">Customer area</span>{" "}
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                <i class="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>
              </Link>
            </li>
            <div className="loginRegisterButtonContainer">
              <li>
                <Link
                  to="/login2"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <i class="fa fa-share fa-lg" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="/login2"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <i class="fa fa-check-square-o fa-lg" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="/login2"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <i class="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="/login2"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <i class="fa fa-bell-o fa-lg" aria-hidden="true"></i>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
