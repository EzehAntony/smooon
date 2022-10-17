import styles from "../../styles/login.module.css";
import Snowfall from "react-snowfall";
import { signIn } from "next-auth/react";
import { useState } from "react";

const signin = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signIn("credentials", {
            username: input.username,
            password: input.password,
            redirect: false,
        });
        console.log(res);
    };

    return (
        <div className={styles.main}>
            <img src="/logo.png" alt="" className={styles.logo} />
            <div className={styles.loginModal}>
                <h2>Login</h2>
                <h3>Enter your details to get signed in to your account</h3>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        value={input.username}
                        required
                        onChange={(e) => setInput((prev) => ({ ...prev, username: e.target.value }))}
                        placeholder="Enter your username"
                        name="input"
                    />

                    <input
                        required
                        type="password"
                        name="input"
                        placeholder="********"
                        value={input.password}
                        onChange={(e) => setInput((prev) => ({ ...prev, password: e.target.value }))}
                    />
                    <button>Having trouble signing in?</button>
                    <br />
                    <button className={styles.submitBtn} type="submit">
                        Sign in
                    </button>
                </form>
            </div>

            <img src="/womanWithAHeart.svg" className={styles.woman} alt="" />
            <Snowfall color="#F62355" />
        </div>
    );
};

export default signin;
