import React from "react";
import "../styles/HotelResultsBanner.css";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";

function HotelResultsBanner() {
  const search = useLocation().search;
  const guests = new URLSearchParams(search).get("numberOfGuests");

  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>7 stays · 12 August , 3 September · {guests} guests</p>
        <h1>Stays nearby</h1>
        <div className="searchPage__buttons">
          <Button variant="outlined">Cancellation Flexibility</Button>
          <Button variant="outlined">Type of place</Button>
          <Button variant="outlined">Price</Button>
          <Button variant="outlined">Rooms and beds</Button>
          <Button variant="outlined">More filters</Button>
        </div>
      </div>
    </div>
  );
}

export default HotelResultsBanner;
