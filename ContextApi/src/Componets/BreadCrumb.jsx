import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

export const BreadCrumbs = () => {
  const location = useLocation();
  console.log("Location: ", location);

  let currLocation = "";

  const crumbs = location.pathname
    .split("/")
    .filter((el) => el !== "")
    .map((el, index) => {
      // currLocation += `/${el}`;

      return (
        <div className="links" style={{ display: "inline-block" }} key={index}>
          <Link to={currLocation}>{el}</Link>
        </div>
      );
    });

  return <div style={{ padding: 10 }}>{crumbs}</div>;
};
