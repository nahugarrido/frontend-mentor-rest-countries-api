import React from "react";
import classes from "./Header.module.css";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const Header = (props) => {
  return (
    <header>
      <div>
        <span className={classes.span}>Where in the world?</span>
      </div>
      <div>
        <button className={classes["dark-button"]} onClick={props.onClick}>
          {props.isDark === "dark" && <FaMoon className={classes.icon} />}
          {props.isDark === "light" && <FaRegMoon className={classes.icon} />}
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;

{
  /* <FontAwesomeIcon icon="fa-regular fa-moon" />;
<FontAwesomeIcon icon="fa-solid fa-moon" />; */
}
