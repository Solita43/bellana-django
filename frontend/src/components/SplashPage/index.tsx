import splash_collage from "../../assets/collage.webp";
import logo from "../../assets/brand.png";

import "./Splash.css";

function Splash() {
  return (
    <div className="splash">
      <div className="top-nav">
        <div className="logo_img">
          <img src={logo} alt="logo" className="logo" ></img>
        </div>
        <ul className="auth-buttons">
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="about">
          <h2 className="about-title">
            Bellana brings all your tasks, teammates, and tools together.
          </h2>
          <p className="about-p">
            Make it easy for your team to focus on tasks at hand!
          </p>
        </div>
        <div className="collage-container">
          <img
            src={splash_collage}
            alt="collage"
            className="splash-collage"
          ></img>
        </div>
      </div>
      <div className="social-network">
        <ul className="social-icons">
          <li>
            <a
              href="https://www.linkedin.com/in/melinda-cortez-3581b0139/"
              target="_blank"
              rel="noreferrer"
              aria-label="linkedin"

            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Solita43"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <p className="copyright">
              Copyright <i className="fa-regular fa-copyright"></i> 2023 Melinda
              Cortez
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Splash;
