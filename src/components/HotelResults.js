import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../styles/HotelResults.css";

function HotelResults(props) {
  return (
    <div className="hotel__results">
      <img src={props.src} alt="" />
      <FavoriteBorderIcon className="hotelResult__heart" />

      <div className="hotelResult__info">
        <div className="hotelResult__infoTop">
          <h4>{props.location}</h4>
          <h3>{props.title}</h3>
          <p>____</p>
          <p>{props.description}</p>
        </div>

        <div className="hotelResult__infoBottom">
          <div className="hotelResults__price">
            <h2>{props.price}</h2>
            <p>{props.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelResults;
