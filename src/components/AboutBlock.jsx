import Block from "./Block";

const AboutBlock = () => {
  return (
    <Block className="col-span-12 ">
      <h1 className="text-2xl font-medium leading-snug">
        {/*eslint-disable-next-line react/no-unescaped-entities*/}A web
        developer specializing in JavaScript and the MERN stack.{" "}
        <span className="text-zinc-400">
          With expertise in crafting responsive web apps, I deliver high-quality
          solutions both independently and collaboratively. Committed to staying
          updated with the latest web development trends and technologies.
        </span>
      </h1>
    </Block>
  );
};

export default AboutBlock;
