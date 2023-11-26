import Logo from "../../assets/logo.svg";
import splash_collage from "../../assets/collage.webp";

import "./Splash.css";

function Splash() {
  return (
    <div className="splash">
      <div className="top-nav">
        <div className="logo_img">
          <img src={Logo} width={460} height={128}alt="Bellana Logo" className="logo"></img>
        </div>
        <ul className="auth-buttons">
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="about">
          <p className="about-title">
            Bellana brings all your tasks, teammates, and tools together.
          </p>
          <p className="about-p">
            Make it easy for your team to focus on tasks at hand!
          </p>
        </div>
        <div className="collage-container">
          <img
            src={splash_collage}
            width={620}
            height={492}
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
