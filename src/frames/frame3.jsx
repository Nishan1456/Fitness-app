import "./frame3.css";
import gym from "../assets/gym.png";
import run from "../assets/run.png";
import bicep from "../assets/bicep.png";
import yoga from "../assets/yoga.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Frame3() {
  return (
    <div className="frame3Container">
      <div className="frame3Content">
        <div className="frame3Heading">
          <h1>The Best Programs We Offers For You</h1>
        </div>
        <div className="frame3Par">
          <pre>
            We offer a wide range of comprehensive fitness Programs designed to
            cater to individuals of all fitness levels. Our aim to help you
            achieve specific goals and maximize results.
          </pre>
        </div>
      </div>

      <div className="frame3Box">
        <div className="frame3Block">
          <img src={gym} alt="gym" />
          <h3>Strength Training</h3>
          <p>
            Our trainers will design that a progressive workout that proper
            achieve gain strength
          </p>
          <a href="#">
            Learn More
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </a>
        </div>
        <div className="frame3Block">
          <img src={yoga} alt="yoga" />
          <h3>Basic Yoga</h3>
          <p>
            This program combines yoga with cardio & strength training to help
            lose weight and fitness.
          </p>
          <a href="#">
            Learn More
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </a>
        </div>
        <div className="frame3Block">
          <img src={bicep} alt="bicep" />
          <h3>Body Building</h3>
          <p>
            For those looking to increase strength build lean muscle, our
            strength and muscle.
          </p>
          <a href="#">
            Learn More
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </a>
        </div>

        <div className="frame3Block">
          <img src={run} alt="run" />
          <h3>Weight Loss</h3>
          <p>
            Our weight loss programs are designed to help your make sustainable
            lifestyle changes.
          </p>
          <a href="#">
            Learn More
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </a>
        </div>
      </div>
    </div>
  );
}
