import style from "../styles/Card.module.css";
import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import axios from "axios";

function Card({ name, state, age, id }) {
    var [left, setLeft] = useState([]);

    useEffect(() => {}, [left]);

    const swpieFunc = (direction, id) => {
        if (direction === "left") {
            setLeft((prev) => [...prev, id]);
        } else if (direction === "right") {
        }
    };

    const like = async (e) => {
        e.preventDefault();
        await axios({
            url: "http://localhost:3000/api/addlikes",
            method: "PUT",
            data: {
                id: id,
            },
            withCredentials: true,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <TinderCard
            preventSwipe={["up", "down"]}
            swipeRequirementType="position"
            swipeThreshold={100}
            onSwipe={(direction) => {
                swpieFunc(direction, id);
            }}
        >
            <div className={style.card}>
                <div className={style.up}>
                    <img src="/henessy.jpg" alt="" />
                    <div className={style.action}>
                        <img src="/rheart.svg" alt="" onClick={(e) => like(e)} />
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
