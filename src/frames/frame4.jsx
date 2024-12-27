import "./frame4.css";
import gym3 from "../assets/gym6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function Frame4() {
  return (
    <div className="frame4Container">
      <div className="frame4Box1">
        <h1>Why Should People Choose Fitness Gym Services</h1>
        <div className="frame4Text">
          <h3>
            <FontAwesomeIcon className="check" icon={faCheck} />
            Personal Training
          </h3>
          <p>
            Our personal trainers can help you to create a personalized fitness
            plan and track your progress
          </p>
        </div>
        <div className="frame4Text">
          <h3>
            <FontAwesomeIcon className="check" icon={faCheck} />
            Expert Trainer
          </h3>
          <p>
            Our gym is proud to offer a team of highly skilled and certified
            trainer help achieve your health and fitness goal.
          </p>
        </div>
        <div className="frame4Text">
          <h3>
            <FontAwesomeIcon className="check" icon={faCheck} />
            Flexible Time
          </h3>
          <p>
            There are many fitness classes that are offered during off-peak
            hours, such as early morning and late evening.
          </p>
        </div>
        <button>Join Today</button>
      </div>
      <div className="frame4Box2">
        <img src={gym3} alt="gym3" />
      </div>
    </div>
  );
}
