import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
// eslint-disable-next-line react/prop-types
const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 50, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bgg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

export default Block;
