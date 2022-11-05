import styles from "../../styles/profileSetup.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { ClapSpinner } from "react-spinners-kit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profilesetup({ data }) {
    const [input, setInput] = useState({
        firstname: data.firstname,
        lastname: data.lastname,
        username: data.username,
        bio: data.bio,
        state: data.state,
        gender: data.gender,
        dob: data.dob,
        picture: data.picture,
        password: data.password,
        confirmPassword: "",
    });
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const profileImg = () => {};

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await axios({
            url: "http://localhost:3000/api/updateprofile",
            method: "POST",
            withCredentials: true,
            data: {
                firstname: input.firstname,
                lastname: input.lastname,
                username: input.username,
                bio: input.bio,
                state: input.state,
                gender: input.gender,
                dob: input.dob,
                picture: input.picture,
                password: input.password,
                confirmPassword: "",
            },
        })
            .then((res) => {
                setLoading(false);
                toast.success(`${res.data}`, {
                    autoClose: 2000,
                    hideProgressBar: true,
                    onClose: () => {
                        router.push("/dash/profile");
                    },
                });
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                var e;
                if (err.response.status !== 500) {
                    e = err.response.data;
                } else {
                    e = "Network error";
                }

                toast.error(`${e}`, {
                    autoClose: 2000,
                    hideProgressBar: true,
                });
            });
    };

    return (
        <div className={styles.profileSetup}>
            <header>
                <img
                    onClick={() => {
                        router.back();
                    }}
                    src="/back.svg"
                    alt=""
                />
            </header>

            <p>profile setup</p>

            <div className={styles.image}>
                <img src="/henessy.jpg" alt="" />
                <img src="/add.svg" alt="" onClick={profileImg()} />
                <input type="file" name="" id="file" />
            </div>

            <div className={styles.info}>
                <div className={styles.education}>
                    <img src="/badge.svg" alt="" />
                    <input
                        type="text"
                        value={input.username}
                        onChange={(e) => setInput((prev) => ({ ...prev, username: e.target.value }))}
                        placeholder=" Enter Username"
                    />
                </div>
            </div>

            {/* Bio */}

            <div className={styles.bio}>
                <span>Bio</span>
                <textarea
                    value={input.bio}
                    placeholder="Enter text here"
                    onChange={(e) => setInput((prev) => ({ ...prev, bio: e.target.value }))}
                    maxLength={200}
                />
            </div>

            <div className={styles.event}></div>

            <div className={styles.groups}>
                {/* Firstname */}
                <div className={styles.group}>
                    <span>Firstname</span>
                    <label>
                        <img src="/badge.svg" alt="" />
                        <input
                            value={input.firstname.toLowerCase()}
                            onChange={(e) => setInput((prev) => ({ ...prev, firstname: e.target.value }))}
                            placeholder="Enter text here"
                        />
                    </label>
                </div>

                {/* Lastname */}
                <div className={styles.group}>
                    <span>Lastname</span>
                    <label>
                        <img src="/badge.svg" alt="" />

                        <input
                            value={input.lastname.toLowerCase()}
                            placeholder="Enter text here"
                            onChange={(e) => setInput((prev) => ({ ...prev, lastname: e.target.value }))}
                        />
                    </label>
                </div>

                {/* Interest */}
                <div className={styles.group}>
                    <span>Interest</span>
                    <label>
                        <img src="/event.svg" alt="" />

                        <select name="" id="">
                            <option value="all">All</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                        </select>
                    </label>
                </div>

                {/* State */}
                <div className={styles.group}>
                    <span>State</span>
                    <label>
                        <img src="/pin.svg" alt="" />
                        <input
                            value={input.state.toLowerCase()}
                            onChange={(e) => setInput((prev) => ({ ...prev, state: e.target.value }))}
                            placeholder="Enter text here"
                        />
                    </label>
                </div>

                {/* Password */}
                <div className={styles.group}>
                    <span>Password</span>
                    <label>
                        <img src="/female.svg" alt="" />
                        <input
                            value={input.password}
                            type="password"
                            onChange={(e) => setInput((prev) => ({ ...prev, password: e.target.value }))}
                            name=""
                            id=""
                        />
                    </label>
                </div>

                {/* Confirm password */}
                <div className={styles.group}>
                    <span>Confirm password</span>
                    <label>
                        <img src="/female.svg" alt="" />

                        <input
                            type="password"
                            value={input.value}
                            onChange={(e) => setInput((prev) => ({ ...prev, password: e.target.value }))}
                            name=""
                            id=""
                        />
                    </label>
                </div>

                {/* Gender */}
                <div className={styles.group}>
                    <span>Gender</span>
                    <label>
                        <img src="/female.svg" alt="" />

                        <select name="" id="">
                            <option value=""></option>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
                    </label>
                </div>
            </div>

            <button className={styles.continue} onClick={(e) => submit(e)}>
                {!loading && "Update"}
                <ClapSpinner frontColor={"white"} size={15} loading={loading} />
            </button>

            <ToastContainer />
        </div>
    );
}

export default Profilesetup;

export const getServerSideProps = async ({ req }) => {
    const res = await fetch(`http://localhost:3000/api/profile`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            cookie: req.headers.cookie,
        },
    });

    const data = await res.json();

    return {
        props: {
            data: data,
        },
    };
};
