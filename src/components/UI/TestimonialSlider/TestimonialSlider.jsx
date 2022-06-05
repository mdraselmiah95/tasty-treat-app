import React from "react";
import Slider from "react-slick";

import image1 from "../../../assets/images/ava-1.jpg";
import image2 from "../../../assets/images/ava-2.jpg";
import image3 from "../../../assets/images/ava-3.jpg";

import "../../../styles/TestimonialSlider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Food was fresh, the corned beef hash is amazing and homemade, even
          the toast was good! Oh, and the potato pancakes! Everything we ordered
          was fresh and delicious. Highly recommend! Definitely coming back.”
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={image1} alt="avatar" className=" rounded" />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          “Normally wings are wings, but theirs are lean meaty and tender, and
          delicious homemade teriaki glaze. Gluten free pizza way better than
          most. Great wait staff too. Came here after finding the best gluten
          free muffins anywhere.”
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={image2} alt="avatar" className=" rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          “Great pizza, mozzarella sticks, calamari, chicken tenders, I could go
          on. Everything we’ve tried here has been amazing. The staff is always
          so friendly and accommodating.”
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={image3} alt="avatar" className=" rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
