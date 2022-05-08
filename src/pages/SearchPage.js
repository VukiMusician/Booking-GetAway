import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import "../styles/SearchPage.css";

function SearchPage() {
  return (
    <>
      <Header />
      <SearchResults />
      <Footer />
    </>
  );
}

export default SearchPage;
