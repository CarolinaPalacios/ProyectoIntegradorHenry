import style from "./About.module.css";
import foto from "../../assets/foto.jpg";

const About = () => {
  return (
    <div className={style.container}>
      <img src={foto} alt="foto" className={style.aboutPhoto} />
      <h2 className={style.name}>Carolina Palacios</h2>
      <p className={style.aboutText}>
        ¡Hola! Soy Carolina, una apasionada de la tecnología y actualmente estoy
        estudiando en Henry para convertirme en FullStack Web Developer. Después
        de mucho tiempo, finalmente me animé a perseguir mi pasión por la
        programación y estoy disfrutando cada momento del proceso. Me considero
        una persona colaborativa y disfruto trabajando en equipo para lograr
        objetivos comunes. ¡No dudes en contactarme si tienes alguna oportunidad
        laboral o simplemente quieres charlar sobre tecnología!🚀✨
      </p>
    </div>
  );
};

export default About;
