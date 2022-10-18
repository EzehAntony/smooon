import styles from "../../styles/login.module.css";
import Snowfall from "react-snowfall";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Signin = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const session = useSession();
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signIn("credentials", {
            username: input.username,
            password: input.password,
            redirect: false,
        });
    };

    useEffect(() => {
        if (session.status === "authenticated") {
            const id = session.data.user.id;
            router.push(`/dash/home`);
        }
    }, [session.status]);

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

export default Signin;
