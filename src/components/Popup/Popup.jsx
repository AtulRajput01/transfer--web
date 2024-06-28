import React from "react";
import "./Popup.scss";
import { FaStar } from "react-icons/fa";

function Popup({
  vehicleType,
  title,
  rating,
  reviews,
  seats,
  vehicleName,
  suitcases,
  buttonText,
  price,
  charge,
  imageUrl,
  email,
  contact
}) {
  const stars = Array(5).fill(0);

  return (
    <div className="popup">
      <div className="col1">
        <div className="img">
        <img src={imageUrl} alt={title} />
        </div>
      </div>
      <div className="col2">

      <h5 style={{fontSize:"2rem"}} className="vehicleName">{vehicleName}</h5>
        {/* <div className="rating">
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
        </div> */}

        {/* <p className="learn">Learn More</p> */}

        <p className="abc-seats">
          <i className="icon" class="fa-solid fa-user"></i> Seats {seats} people
        </p>

        <p className="suitcase">
          <i className="icon" class="fa-solid fa-suitcase"></i> Fits {suitcases}{" "}
          medium suitcases
        </p>
       
        <p className="p-0 m-0 text-muted">
          from: <code>{charge.pickupCity}</code>{" "}
        </p>
        <p className="p-0 m-0 text-muted">
          to: <code>{charge.dropoffCity}</code>
        </p>
        {charge && <h5 className="date">Price ${price}</h5>}


      </div>
      <div className="col3">
        <p className="icon">
        
          Price upon request. Please contact us.
        </p>
        <p className="icon">
         
          {contact} <br />
          WhatsApp, Viber, Telegram, WeChat
        </p>
        <p className="icon">
       
          Free Waiting Time
        </p>
        <p>{email}</p>
        <p>Thank you!</p>

     
      </div>
    </div>
  );
}

export default Popup;
