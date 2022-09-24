import style from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className={style.footer}>
      <Link href={"/notification"}>
        <Image src="/notification.svg" width={30} height={30} alt="" />
      </Link>

      <Link href={"/like"}>
        <Image src="/heart.svg" width={30} height={30} alt="" />
      </Link>

      <Link href={"/home"}>
        <Image
          src="/fire.svg"
          className={style.fire}
          width={45}
          height={45}
          alt=""
        />
      </Link>

      <Link href={"/message"}>
        <Image src="/message.svg" width={30} height={30} alt="" />
      </Link>

      <Link href={"/profile"}>
        <Image src="/profile.svg" width={30} height={30} alt="" />
      </Link>
    </div>
  );
}

export default Footer;
