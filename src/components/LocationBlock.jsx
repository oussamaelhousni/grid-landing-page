import Block from "./Block";
import { CiLocationOn } from "react-icons/ci";

const LocationBlock = () => {
  return (
    <Block className="col-span-12  md:col-span-3 flex flex-col items-center gap-4">
      <CiLocationOn className="text-3xl" />
      <h3 className="text-xl text-zinc-300">Casablanca</h3>
    </Block>
  );
};

export default LocationBlock;
