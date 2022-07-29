import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Footer({ thumb, title, day, time }) {
  return (
    <div className="footer">
      <div className="thumb">
        <img src={thumb} alt="movie-thumb" />{" "}
      </div>
      <div className="info">
        <div className="movie-title">{title}</div>
        <div className="times">
          {day} - {time}
        </div>
      </div>
    </div>
  );
}
