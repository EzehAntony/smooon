import style from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className={style.footer}>
      <Link href={"/notification"}>
        <a>
          <Image src="/notification.svg" width={30} height={30} alt="" />
        </a>
      </Link>

      <Link href={"/like"}>
        <a>
          <Image src="/heart.svg" width={30} height={30} alt="" />
        </a>
      </Link>

      <Link href={"/home"}>
        <a>
          <Image
            src="/fire.svg"
            className={style.fire}
            width={45}
            height={45}
            alt=""
          />
        </a>
      </Link>

      <Link href={"/message"}>
        <a>
          <Image src="/message.svg" width={30} height={30} alt="" />
        </a>
      </Link>

      <Link href={"/profile"}>
        <a>
          <Image src="/profile.svg" width={30} height={30} alt="" />
        </a>
      </Link>
    </div>
  );
}

export default Footer;
