import styles from "../../styles/login.module.css";
import Snowfall from "react-snowfall";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ClapSpinner } from "react-spinners-kit";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setCookie } from "cookies-next";
import userStore from "../../userStore";

const Signin = () => {
    const setUser = userStore((state) => state.setUser);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.username.includes(" ")) {
            setLoading(true);
            await axios({
                method: "POST",
                url: "http://localhost:3000/api/auth/login",
                data: {
                    username: input.username,
                    password: input.password,
                },
            })
                .then((res) => {
                    const { _id } = res.data;
                    setUser(_id);

                    toast(`Logged in`, {
                        type: "success",
                        autoClose: 2000,
                        hideProgressBar: true,
                        onClose: () => {
                            router.push(`/dash/profile`);
                        },
                    });
                    setLoading(false);
                })
                .catch((error) => {
                    toast(`${error.response?.data ? error.response.data : "unexpected server error"}`, {
                        type: "error",
                        autoClose: 2000,
                        hideProgressBar: true,
                    });
                    setLoading(false);
                });
        } else {
            toast(`Username can not have white spaces`, {
                type: "warning",
                autoClose: 2000,
                hideProgressBar: true,
            });
        }
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
                        autoComplete="off"
                        onChange={(e) => setInput((prev) => ({ ...prev, username: e.target.value }))}
                        placeholder="Enter your username"
                        name="username"
                    />

                    <input
                        required
                        type="password"
                        name="password"
                        placeholder="********"
                        value={input.password}
                        input
                        onChange={(e) => setInput((prev) => ({ ...prev, password: e.target.value }))}
                    />
                    <p
                        className={styles.register}
                        onClick={() => {
                            router.push("/auth/signup");
                        }}
                    >
                        Register
                        <span>here!</span>
                    </p>

                    <button className={styles.submitBtn} name="input">
                        {!loading && "Signin"}
                        <ClapSpinner loading={loading} frontColor="#fff" size="18" />
                    </button>
                </form>
            </div>

            <img src="/womanWithAHeart.svg" className={styles.woman} alt="" />
            <Snowfall color="#F62355" />
            <ToastContainer />
        </div>
    );
};

export default Signin;
