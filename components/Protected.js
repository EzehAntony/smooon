import React from "react";
import { useRouter } from "next/router";
import { Session } from "next-auth";

function Protected({ children }) {
    useEffect(() => {
        if (session.status !== "authenticated") {
            Router.replace("/auth/signin");
        }
    }, []);
    return <div>{children}</div>;
}

export default Protected;
