import "./frame2.css";
import gym5 from "../assets/gym5.jpg";

export default function Frame2() {
  return (
    <div className="frame2Container">
      <div className="frame2Box1">
        <img src={gym5} alt="gym" />
      </div>
      <div className="frame2Box2">
        <h1>Get Ready To Reach Your Fitness Goals</h1>

        <pre className="par">
          We are a gym that is committed to helping people reach their fitness
          goals. We offer a variety of theirs programs and services to fit your
          needs, whether you are a experienced athlete.
        </pre>

        <p>
          We believe that everyone should have access to the benefits of
          exercise make it happen.
        </p>
        <button>
          <a href="#">Free Trial Today</a>
        </button>
      </div>
    </div>
  );
}
