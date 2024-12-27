import {
  faLocationPin,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./frame6.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/logo.png";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Frame6() {
  return (
    <div className="frame6Container">
      <div className="frame6Content">
        <div className="contact">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Why us</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Partnership</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Categories</h3>
          <ul>
            <li>
              <a href="#">Basic Yoga</a>
            </li>
            <li>
              <a href="#">Strength Training</a>
            </li>
            <li>
              <a href="#">Body Building</a>
            </li>
            <li>
              <a href="#">Weight Loss</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Help</h3>
          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Service Center</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <a href="#">+977-9815973159</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <a href="#">Nishanshrestha1456@gmail.com</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faLocationPin} />
              <a href="#">Kalanki-9,Kathmandu</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Subscribe Our Newsletter</h3>
          <ul>
            <li className="email-container">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </li>
            <li>
              <a href="#">Never miss an update</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="frame6Footer">
        <div className="frame6Line"></div>
        <div className="frame6Bottom">
          <img src={logo} alt="logo" />
          <p>@2024 DesignNishan. All Copyrights reserved</p>
          <div className="frame6Logo">
            <FontAwesomeIcon className="social" icon={faFacebook} />
            <FontAwesomeIcon className="social" icon={faInstagram} />
            <FontAwesomeIcon className="social" icon={faTwitter} />
            <FontAwesomeIcon className="social" icon={faLinkedin} />
          </div>
        </div>
      </div>
    </div>
  );
}
