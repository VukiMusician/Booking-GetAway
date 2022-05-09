import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import "../styles/Search.css";
import Button from "@mui/material/Button";
import { People } from "@mui/icons-material";
import { useNavigate } from "react-router";

function Search() {
  let navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState([2]);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  function handleChange(e) {
    setNumberOfGuests(e.target.value);
  }

  return (
    <div className="date__picker">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <div className="datepicker__bottom">
        <h2>Number of guests</h2>
        <People />
        <input min={0} defaultValue={2} type="number" onChange={handleChange} />
        <Button
          variant="text"
          onClick={() => {
            navigate(`/search?numberOfGuests=${numberOfGuests}`);
          }}
        >
          Search Booking GetAway
        </Button>
      </div>
    </div>
  );
}
export default Search;
