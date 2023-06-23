import SearchBar from "../SearchBar/SearchBar";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/heart.svg";
import style from "./Nav.module.css";

const Nav = ({ onSearch, random, logout }) => {
  return (
    <nav className={style.navBar}>
      <NavLink to="/home" className={style.titleLink}>
        <h1 className={style.title}>RICK AND MORTY</h1>
      </NavLink>
      <button className={style.homeButton}>
        <NavLink to="/home" className={style.navToHome}>
          Home
        </NavLink>
      </button>
      <button className={style.aboutButton}>
        <NavLink to="/about" className={style.navToAbout}>
          About
        </NavLink>
      </button>
      <SearchBar onSearch={onSearch} random={random} />
      <button className={style.favoriteButton}>
        <Link to="/favorites">
          <img src={logo} alt="favorites" className={style.logoButton} />
        </Link>
      </button>
      <button className={style.logoutButton} onClick={logout}>
        LogOut
      </button>
    </nav>
  );
};

export default Nav;
