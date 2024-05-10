import {
  HeaderBlock,
  SocialsBlock,
  AboutBlock,
  LocationBlock,
  EmailBlock,
} from "./components";

import { motion } from "framer-motion";
function App() {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50 overflow-x-hidden">
      <motion.div
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.1,
        }}
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailBlock />
      </motion.div>
    </div>
  );
}

export default App;
