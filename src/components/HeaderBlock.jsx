import Block from "./Block";
import { FaArrowRight } from "react-icons/fa";

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <img
        src="https://media.licdn.com/dms/image/D4E03AQHcsujCg2zfzA/profile-displayphoto-shrink_200_200/0/1711981079946?e=1720656000&v=beta&t=tgJ9XHtBNH7-Ay3sO7AbmQ4Np3vCVQFP6WF-sJ6RlOY"
        className="size-14 rounded-full mb-4"
        alt=""
      />

      <h1 className="text-4xl mb-12 leading-tight font-medium">
        Hi, I am Oussama.{" "}
        <span className="text-zinc-400">
          I build cool websites like this one.
        </span>
      </h1>
      <a
        href=""
        className="flex items-center gap-1 text-red-300 hover:underline"
      >
        Contact me
        <FaArrowRight size={10} className="flex" />
      </a>
    </Block>
  );
};

export default HeaderBlock;
