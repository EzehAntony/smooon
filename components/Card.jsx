import style from "../styles/Card.module.css";
import TinderCard from "react-tinder-card";

function Card({ name, state, age }) {
  return (
    <TinderCard>
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
          <h3 className="name">{name}</h3>
          <p className="location">{state}</p>
          <h5 className="age">{age}</h5>
        </div>
      </div>
    </TinderCard>
  );
}

export default Card;
