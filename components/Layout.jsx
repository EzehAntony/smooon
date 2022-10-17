import React, { useEffect } from "react";
import Footer from "./Footer";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Layout({ children }) {
    const session = useSession();
    const router = useRouter();
    useEffect(() => {
        if (session.status !== "authenticated") {
            router.replace("/auth/signin");
        }
    }, [session.status]);
    return (
        <div>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
