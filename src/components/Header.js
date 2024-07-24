import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="Header">
      <img className="logo" src="logo.png" alt="moviedux"  />
      <h2 className="app-subtitles">
        <i>Its Time For Popcorn! find your next movie here.</i>
      </h2>
    </div>
  );
}
