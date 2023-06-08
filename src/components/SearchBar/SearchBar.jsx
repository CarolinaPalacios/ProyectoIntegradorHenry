import style from "./SearchBar.module.css";
import { useState } from "react";
import logo from "../../assets/random-4.svg";

export default function SearchBar({ onSearch, random }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setId(event.target.value);
  };

  return (
    <div className={style.containerNav}>
      <input
        type="search"
        value={id}
        onChange={handleChange}
        className={style.searchInput}
        placeholder="Search for ID..."
      />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
        className={style.onSearchButton}
      >
        Add
      </button>
      <button className={style.buttonRandom} onClick={random}>
        <img src={logo} alt="Random" className={style.logoButton} />
      </button>
    </div>
  );
}
