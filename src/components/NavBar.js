import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  display: "inline-block",
  width: "50px",
  padding: "7px",
  margin: "0 6px 6px",
  background: "whitesmoke",
  textDecoration: "none",
  color: "black",
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={styles}
        activeStyle={{
          background: "purple",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={styles}
        activeStyle={{
          background: "purple",
        }}
      >
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
        style={styles}
        activeStyle={{
          background: "purple",
        }}
      >
        Directors
      </NavLink>

      <NavLink
        to="/actors"
        exact
        style={styles}
        activeStyle={{
          background: "purple",
        }}
      >
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
