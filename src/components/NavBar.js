import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
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
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "purple",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={linkStyles}
        activeStyle={{
          background: "purple",
        }}
      >
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
        style={linkStyles}
        activeStyle={{
          background: "purple",
        }}
      >
        Directors
      </NavLink>

      <NavLink
        to="/actors"
        exact
        style={linkStyles}
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
