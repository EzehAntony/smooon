import React, { useEffect } from "react";
import style from "../styles/error.module.css";
import { useRouter } from "next/router";

function Error() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            /*             router.push("/dash/home"); */
        }, 3000);
        router.push("/auth/signin");
    }, [router]);

    return (
        <div className={style.error}>
            <div className={style.alert}>
                <h1>Page not found!</h1>
                <p>you are being redirected...</p>
            </div>
        </div>
    );
}

export default Error;
