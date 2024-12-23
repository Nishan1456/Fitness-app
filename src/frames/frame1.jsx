import "./frame1.css";
import logo from "../assets/logo.png";
import play from "../assets/play.png";
import gym1 from "../assets/gym4.png";
import hubspot from "../assets/hubspot.png";
import netflix from "../assets/netflix.png";
import mapbox from "../assets/mapbox.png";

export default function Frame1() {
  return (
    <>
      <div className="frame1Container">
        <div className="frame1Box">
          {/* navbar section  */}
          <div className="navbar">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Program</a>
              </li>
              <li>
                <a href="#">Memberships</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <button>
                <a href="#">Sign Up</a>
              </button>
            </ul>
          </div>

          {/* content section  */}
          <div className="frame1Content">
            <div className="frame1Box1">
              <h1>GET HEALTHY BODY WITH THE PERFECT EXERCISES</h1>
              <p>
                We are always there to help you to make a healthy body and mind
                through the power of fitness.
              </p>
              <div className="frame1Btn">
                <button>
                  <a href="#">Get Started</a>
                </button>
                <img src={play} alt="" />
                <p>Watch Video</p>
              </div>
              <div className="frame1Data">
                <div className="member">
                  <h2>105+</h2>
                  <pre>Expert Trainers</pre>
                </div>
                <span></span>
                <div className="member">
                  <h2>970+</h2>
                  <pre>Member Joined</pre>
                </div>
                <span></span>
                <div className="member">
                  <h2>135+</h2>
                  <pre>Fitness Programs</pre>
                </div>
              </div>
            </div>
            <div className="frame1Box2">
              <img src={gym1} alt="gym1" />
            </div>
          </div>
        </div>
        <div className="frame1Footer">
          <div className="data">
            <h2>970K+ More</h2>
            <pre>Trusted Companies Partner</pre>
          </div>
          <ul>
            <li>
              <img src={hubspot} alt="hubspot" />
            </li>
            <li>
              <img src={netflix} alt="videoask" />
            </li>
            <li>
              <img src={mapbox} alt="mapbox" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
