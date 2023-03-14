import React from "react";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <ul className="btn-cory pt-4">
      <PortfolioItem
        url="https://cubsplaytoday.com"
        btnText="Cubs Play Today"
      />
    </ul>
  );
}

export default Portfolio;
