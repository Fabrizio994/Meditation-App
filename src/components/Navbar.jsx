import { Link } from "react-router-dom";

import "../css/NavBar.css";
<css />;
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-around">
        <div>
          <Link className="navbar-brand" to={`/`}>
            <h1>MediNow</h1>
          </Link>
        </div>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active"></li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Timer`}>
                  Timer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/HowTo`}>
                  HowTo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
