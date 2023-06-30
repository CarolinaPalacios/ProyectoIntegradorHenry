import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.container}>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              key={id}
              userId={1} //Como todavia esta en desarrollo y no tenemos autenticación le pasamos un valor estático
              id={id}
              status={status}
              name={name}
              species={species}
              gender={gender}
              origin={origin}
              image={image}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
}
