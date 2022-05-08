import React, { useState } from "react";
import House from "../assets/house.jpg";
import "../styles/Banner.css";
import Search from "../components/Search";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const containerAnim = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 0.95 } },
  };

  return (
    <div>
      <div className="container">
        <img src={House} className="house__pic" alt="house" />
      </div>
      <motion.div
        variants={containerAnim}
        initial="hidden"
        animate="show"
        className="banner__description"
      >
        <motion.h1 variants={titleAnim} initial="hidden" animate="show">
          Safe, Fast, Secure
        </motion.h1>
        <p>Your best booking place</p>
        <Button variant="contained" onClick={() => setShowSearch(!showSearch)}>
          Start your search
        </Button>
        {showSearch && <Search />}
      </motion.div>
    </div>
  );
}

export default Banner;
