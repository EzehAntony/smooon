import { useState } from "react";
import styles from "../../styles/signup.module.css";
import Snowfall from "react-snowfall";
import axios from "axios";
import { useRouter } from "next/router";
import { ClapSpinner } from "react-spinners-kit";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
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
        setLoading(true);
        await axios({
            method: "POST",
            url: "/api/auth/register",
            data: input,
        })
            .then((res) => {
                setLoading(false);
                router.push("/auth/signin");
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    return (
        <div className={styles.main}>
            <img src="/logo.png" alt="" className={styles.logo} />

            <div className={styles.registerModal}>
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
                    <p
                        className={styles.login}
                        onClick={() => {
                            router.push("/auth/signin");
                        }}
                    >
                        Already have an account?
                        <span>Login here!</span>
                    </p>
                    <button className={styles.submitBtn} type="submit">
                        {!loading && "SignUp"}
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

export default Signup;
