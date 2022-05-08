import React, { useEffect, useState } from "react";
import axios from "axios";
import HotelResults from "./HotelResults";
import HotelResultsBanner from "./HotelResultsBanner";

function SearchResults() {
  const [hotels, setHotels] = useState([]);
  const getHotels = () => {
    axios
      .get("http://localhost:3000/hotels")
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getHotels();
  }, []);

  return (
    <div>
      <HotelResultsBanner />
      {hotels.map((hotel) => (
        <HotelResults
          key={hotel.id}
          src={hotel.src}
          title={hotel.title}
          description={hotel.description}
          star={hotel.star}
          price={hotel.price}
          total={hotel.total}
        />
      ))}
    </div>
  );
}

export default SearchResults;
