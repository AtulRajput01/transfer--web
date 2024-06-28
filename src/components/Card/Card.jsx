import React from "react";
import "./Card.scss";
import { FaStar } from "react-icons/fa";

const Card = ({
  vehicleType,
  title,
  rating,
  reviews,
  seats,
  suitcases,
  buttonText,
  vehiclePrice,
  image,
  onClick,
}) => {
  const stars = Array(5).fill(0);

  return (
    <div className="abc">
      <div className="abc-card">
      

        <div className="img">
          <img src={image} alt="image" />
        </div>

        <h3>{title}</h3>

        <div className="rating">
          <span className="rating-value">{rating}</span>
          <div className="stars">
            {stars.map((_, index) => (
              <FaStar
                key={index}
                color={index < rating ? "#4A90E2" : "#e4e5e9"}
              />
            ))}
          </div>
          <span className="reviews">
            {reviews} {reviews === 1 ? "review" : "reviews"}
          </span>
        </div>

         

        <p className="abc-seats">
          <i className="icon" class="fa-solid fa-user"></i> Seats {seats} people
        </p>

        <p className="suitcase">
          <i className="icon" class="fa-solid fa-suitcase"></i> Fits {suitcases}{" "}
          medium suitcases
        </p>
<div className="vehiclePrice" style={{width:"5rem", marginBottom:"1rem"}}>
        <h3 className="price" style={{margin:"0px 0px ", paddingLeft:"2rem", fontSize:"2.3rem"}}>${vehiclePrice}</h3>
        </div>
        <button className="abc-choose" onClick={onClick}>
          Choose this vehicle
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
