import style from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

function Footer() {
    const [id, setId] = useState("");
    const session = useSession();
    useEffect(() => {
        if (session.data) {
            setId(session.data.user.id);
        }
    }, [session]);
    const router = useRouter();

    return (
        <div className={style.footer}>
            <Link href={"/dash/minite"}>
                <div>
                    <Image
                        src={
                            router.pathname.includes("/dash/minite") ? "/notification_active.svg" : "/notification.svg"
                        }
                        width={30}
                        height={30}
                        alt=""
                    />
                </div>
            </Link>

            <Link href={"/dash/like"}>
                <div>
                    <Image
                        src={router.pathname.includes("/dash/like") ? "/heart_active.svg" : "/heart.svg"}
                        width={30}
                        height={30}
                        alt=""
                    />
                </div>
            </Link>

            <Link href={"/dash/home"}>
                <div>
                    <Image
                        src={router.pathname.includes("/dash/home") ? "/fire_active.svg" : "/fire.svg"}
                        className={style.fire}
                        width={45}
                        height={45}
                        alt=""
                    />
                </div>
            </Link>

            <Link href={"/dash/message"}>
                <div>
                    <Image
                        src={router.pathname.includes("/dash/message") ? "/message_active.svg" : "/message.svg"}
                        width={30}
                        height={30}
                        alt=""
                    />
                </div>
            </Link>

            <Link href={`/dash/profile/${id}`}>
                <div>
                    <Image
                        src={router.pathname.includes("/dash/profile") ? "/profile_active.svg" : "/profile.svg"}
                        width={30}
                        height={30}
                        alt=""
                    />
                </div>
            </Link>
        </div>
    );
}

export default Footer;
