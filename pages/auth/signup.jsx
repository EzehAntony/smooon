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

    //input states
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        username: "",
        state: "",
        gender: "",
        dob: "",
        picture: null,
        password: "",
        confirmPassword: "",
    });

    //form submit function
    const submit = async (e) => {
        e.preventDefault();

        //input verifications
        if (input.password !== input.confirmPassword) {
            toast.error("Passwords do not match!", {
                autoClose: 2000,
                hideProgressBar: true,
            });
        } else if (input.password == "" || input.confirmPassword == "") {
            toast.error("Passwords can not be an empty string", {
                autoClose: 2000,
                hideProgressBar: true,
            });
        } else if (!/[mfMF]/.test(input.gender)) {
            toast.error(`Gender has to be either "m" or "f"`, {
                autoClose: 3000,
                hideProgressBar: true,
            });
        }
        //on form verified
        else {
            setLoading(true);
            //configuring the data of the file
            const data = new FormData();
            data.append("file", input.picture);
            data.append("upload_preset", "uploads");

            //posting the configured data to the coud
            await axios
                .post("https://api.cloudinary.com/v1_1/dq1m3buf0/image/upload", data)
                .then(async (res) => {
                    await axios({
                        method: "POST",
                        url: "http://localhost:3000/api/auth/register",
                        data: {
                            firstname: input.firstname,
                            lastname: input.lastname,
                            username: input.username,
                            state: input.state,
                            gender: input.gender,
                            dob: input.dob,
                            picture: res.data.url,
                            password: input.password,
                            confirmPassword: input.confirmPassword,
                        },
                    }).then(() => {
                        setLoading(false);
                        toast.success("Registered", {
                            autoClose: 2000,
                            hideProgressBar: true,
                            onClose: () => {
                                router.push("/auth/signin");
                            },
                        });
                    });
                })
                .catch((err) => {
                    setLoading(false);
                    toast.error(`${err.message}`, {
                        autoClose: 2000,
                        hideProgressBar: true,
                    });
                });
        }
    };

    return (
        <div className={styles.main}>
            <img src="/logo.png" alt="" className={styles.logo} />

            <div className={styles.registerModal}>
                <h2>Sign up</h2>
                <h3>Hi there! Create an acoount to see other smoooners!</h3>
                <form onSubmit={(e) => submit(e)}>
                    <input
                        required
                        type="text"
                        value={input.firstname.toLowerCase().trim()}
                        onChange={(e) => setInput((prev) => ({ ...prev, firstname: e.target.value }))}
                        placeholder="Firstname"
                    />
                    <input
                        required
                        type="text"
                        value={input.lastname.toLowerCase().trim()}
                        onChange={(e) => setInput((prev) => ({ ...prev, lastname: e.target.value }))}
                        placeholder="Lastname"
                    />
                    <input
                        required
                        type="text"
                        value={input.username.toLowerCase().trim()}
                        onChange={(e) => setInput((prev) => ({ ...prev, username: e.target.value }))}
                        placeholder="Username"
                    />
                    <input
                        required
                        type="text"
                        value={input.state.toLowerCase().trim()}
                        onChange={(e) => setInput((prev) => ({ ...prev, state: e.target.value }))}
                        placeholder="State"
                    />
                    <input
                        required
                        type="text"
                        placeholder="gender M/F"
                        maxLength={1}
                        value={input.gender}
                        onChange={(e) => setInput((prev) => ({ ...prev, gender: e.target.value }))}
                    />
                    <input
                        required
                        type="date"
                        value={input.dob.toLowerCase().trim()}
                        onChange={(e) => setInput((prev) => ({ ...prev, dob: e.target.value }))}
                        placeholder="DD/MM/YY"
                    />
                    <input
                        required
                        type="password"
                        value={input.password.toLowerCase().trim()}
                        onChange={(e) => setInput((prev) => ({ ...prev, password: e.target.value }))}
                        name=""
                        placeholder="Password"
                    />
                    <input
                        required
                        type="password"
                        name=""
                        placeholder="Confirm password"
                        value={input.confirmPassword.toLowerCase().trim()}
                        onChange={(e) => setInput((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                    />
                    <br />
                    <input
                        required
                        type="file"
                        name=""
                        onChange={(e) => setInput((prev) => ({ ...prev, picture: e.target.files[0] }))}
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
