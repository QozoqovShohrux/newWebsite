import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../fileCss/navbar.scss";
const Navbar = () => {
  return (
    <>
      <nav  className="navbar active-navbar navbar-expand-md navbar-dark ">
        <div className="container">
          <div className="content">
          <a className="navbar-brand" data-aos="fade-right"
          data-aos-delay="800" href="#home">
            codeKazakoff
          </a>
          </div>
          <button
            className="aos-init aos-animate collapsed navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto aos-init aos-animate" data-aos="fade-left"
            data-aos-delay="800">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#works">
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
