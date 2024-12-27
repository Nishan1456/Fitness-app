import "./frame5.css";
import rate from "../assets/star.svg";
import add from "../assets/add.png";
import image1 from "../assets/people1.jpg";
import image2 from "../assets/people2.jpg";
import rating from "../assets/rating.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/pagination"; // Pagination module CSS
import { Pagination } from "swiper/modules"; // Import the required module

export default function Frame5() {
  const comments = [
    {
      image: image1,
      name: "Prabha Stha",
      comment:
        "I have coming to this gym for 3 year now and I have never been in better shape. The trainers are amazing and they always push me be my best. I am so glad to this gym",
    },
    {
      image: image2,
      name: "Nishan Stha",
      comment:
        "I have coming to this gym for 1 year now and I have never been in better shape. The trainers are amazing and they always push me be my best. I am so glad to this gym. Thanks to this gym.",
    },
  ];
  return (
    <div className="frame5Container">
      <div className="frame5Top">
        <h1>Choose The Best Plan</h1>
        <p>
          Choose a plan thats right htmlFor your growing team. Simple pricing
          and no hidden charges.
        </p>
      </div>
      <div className="slide">
        <div className="pricing-selector">
          <input type="radio" id="monthly" name="pricing" checked />
          <label htmlFor="monthly" className="option">
            Monthly
          </label>

          <input type="radio" id="annual" name="pricing" />
          <label htmlFor="annual" className="option">
            Annual
          </label>

          <div className="selector"></div>
        </div>
      </div>
      <div className="frame5Box">
        <div className="frame5Block">
          <h4>Discover</h4>
          <div className="frame5Par">
            <span className="frame5Dollar">$99</span>{" "}
            <span className="frame5Per">/Per Month</span>
          </div>
          <div className="frame5Text">
            <p className="light">5 classes per month</p>
            <p className="light">4 group class monthly</p>
            <p className="blur">Online class access</p>
            <p className="blur">E-book fitness guide</p>
          </div>
          <button>Choose Plan</button>
        </div>
        <div className="frame5Block">
          <h4>Enterprise</h4>
          <div className="frame5Par">
            <span className="frame5Dollar">$299</span>{" "}
            <span className="frame5Per">/Per Month</span>
          </div>
          <div className="frame5Text">
            <p className="light">10 classes per month</p>
            <p className="light">8 group class monthly</p>
            <p className="light">Online class access</p>
            <p className="light">E-book fitness guide</p>
          </div>
          <button>Choose Plan</button>
        </div>
        <div className="frame5Block">
          <h4>Professional</h4>
          <div className="frame5Par">
            <span className="frame5Dollar">$199</span>{" "}
            <span className="frame5Per">/Per Month</span>
          </div>
          <div className="frame5Text">
            <p className="light">7 classes per month</p>
            <p className="light">6 group class monthly</p>
            <p className="light">Online class access</p>
            <p className="blur">E-book fitness guide</p>
          </div>
          <button>Choose Plan</button>
        </div>
      </div>
      <div className="frame5Feed">
        <div className="frame5Comment1">
          <h1>What Our Happy Clients Say About Us</h1>
          <p>
            I have been a member of fitness within for about 6 months now and I
            absolutely love it! The trainers motivate and they really help to
            reach fitness goals.
          </p>
          <div className="frame5Rating">
            <div className="photo-container">
              <img
                src={image1}
                alt="Photo 1"
                className="photo"
                data-rating="3"
              />
              <img
                src={image2}
                alt="Photo 2"
                className="photo"
                data-rating="5"
              />
              <img src={add} alt="Photo 3" className="photo" data-rating="2" />
            </div>
            <div className="frame5Rate">
              <img src={rate} alt="rate" />
              <p>4.6(450 Reviews)</p>
            </div>
          </div>
        </div>
        <div className="frame5Comment2">
          <div className="frame5Section">
            <Swiper
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {comments.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="frame5Section1">
                    <img src={data.image} alt="image1" />
                    <div className="frame5Name">
                      <h4>{data.name}</h4>
                      <p>Happy Customer</p>
                    </div>
                  </div>
                  <div className="frame5Section2">
                    <img src={rating} alt="rating" />
                  </div>
                  <div className="frame5Section3">
                    <p>{data.comment}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
