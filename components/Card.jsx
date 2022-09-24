import style from "../styles/Card.module.css";

function Card() {
  return (
    <div className={style.card}>
      <div className={style.up}>
        <img src="/henessy.jpg" alt="" />
        <div className={style.action}>
          <img src="/rheart.svg" alt="" />
          <img src="/star.svg" alt="" />
          <img src="/close.svg" alt="" />
        </div>
      </div>
      <div className={style.down}>
        <h3 className="name">Tatiana Saris</h3>
        <p className="location">Florida, USA </p>
        <h5 className="age">21</h5>
      </div>    </div>
  );
}

export default Card;
