import { useState } from "react";
import styles from "../../styles/signup.module.css";
import Snowfall from "react-snowfall";
import axios from "axios";

const Signup = () => {
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        username: "",
        state: "",
        gender: "",
        dob: "",
        password: "",
        confirmPassword: "",
    });

    const submit = async (e) => {
        e.preventDefault();
        console.log(input);
        await axios({
            method: "POST",
            url: "https://smooon.vercel.app/api/auth/register",
            data: input,
        })
            .then((res) => {
                router.push("/auth/Signin");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={styles.main}>
            <img src="/logo.png" alt="" className={styles.logo} />

            <div className={styles.loginModal}>
                <h2>Sign up</h2>
                <h3>Hi there! Create an acoount to see other smoooners!</h3>
                <form onSubmit={(e) => submit(e)}>
                    <input
                        type="text"
                        value={input.firstname}
                        onChange={(e) => setInput((prev) => ({ ...prev, firstname: e.target.value }))}
                        placeholder="Firstname"
                    />
                    <input
                        type="text"
                        value={input.lastname}
                        onChange={(e) => setInput((prev) => ({ ...prev, lastname: e.target.value }))}
                        placeholder="Lastname"
                    />
                    <input
                        type="text"
                        value={input.username}
                        onChange={(e) => setInput((prev) => ({ ...prev, username: e.target.value }))}
                        placeholder="Username"
                    />
                    <input
                        type="text"
                        value={input.state}
                        onChange={(e) => setInput((prev) => ({ ...prev, state: e.target.value }))}
                        placeholder="State"
                    />
                    <input
                        type="text"
                        placeholder="gender M/F"
                        maxLength={1}
                        value={input.gender}
                        onChange={(e) => setInput((prev) => ({ ...prev, gender: e.target.value }))}
                    />
                    <input
                        type="date"
                        value={input.dob}
                        onChange={(e) => setInput((prev) => ({ ...prev, dob: e.target.value }))}
                        placeholder="DD/MM/YY"
                    />
                    <input
                        type="password"
                        value={input.password}
                        onChange={(e) => setInput((prev) => ({ ...prev, password: e.target.value }))}
                        name=""
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        name=""
                        placeholder="Confirm password"
                        value={input.confirmPassword}
                        onChange={(e) => setInput((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                    />
                    <button className={styles.submitBtn} type="submit">
                        Sign up
                    </button>
                </form>
            </div>
            <img src="/womanWithAHeart.svg" className={styles.woman} alt="" />

            <Snowfall color="#F62355" />
        </div>
    );
};

export default Signup;
