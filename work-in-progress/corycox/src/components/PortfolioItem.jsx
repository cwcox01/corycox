import React from "react";

export default function PortfolioItem({ url, btnText }) {
  return (
    <li>
      <button className="btn btn-secondary">
        <a href={url} target="_blank" rel="noreferrer">
          {btnText}
        </a>
      </button>
    </li>
  );
}
