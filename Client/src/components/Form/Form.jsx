import validation from "../../utils/validation";
import { useState } from "react";
import image from "../../assets/rym.png";
import style from "./Form.module.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <img src={image} alt="login" className={style.image} />
      <label className={style.labelEmail}>EMAIL:</label>
      <input
        type="email"
        placeholder="email@example.com"
        name="email"
        className={style.inputEmail}
        value={userData.email}
        onChange={handleChange}
      />
      <div className={style.errorEmailContainer}>
        {errors.email && <p className={style.errorEmail}>{errors.email}</p>}
      </div>
      <br />

      <label htmlFor="password" className={style.labelPassword}>
        PASSWORD:
      </label>
      <input
        type="password"
        placeholder="password"
        name="password"
        className={style.inputPassword}
        value={userData.password}
        onChange={handleChange}
      />
      <div className={style.errorPasswordContainer}>
        {errors.password && (
          <p className={style.errorPassword}>{errors.password}</p>
        )}
      </div>
      <br />

      <button type="submit" className={style.buttonForm}>
        Submit
      </button>
    </form>
  );
};

export default Form;
