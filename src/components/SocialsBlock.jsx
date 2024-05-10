import Block from "./Block";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialsBlock = () => {
  return (
    <>
      <Block
        className="col-span-6 bg-blue-500 md:col-span-3"
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <FaLinkedin />
        </a>
      </Block>
      <Block
        className="col-span-6 bg-gray-700 md:col-span-3"
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <FaGithub />
        </a>
      </Block>
      <Block
        className="col-span-6 bg-green-500 md:col-span-3"
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <FaWhatsapp />
        </a>
      </Block>
      <Block
        className="col-span-6 bg-white md:col-span-3"
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGmail color="red" />
        </a>
      </Block>
    </>
  );
};
export default SocialsBlock;
