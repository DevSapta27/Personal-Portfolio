import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}

      <div className="flex-col hidden md:flex c-space mt-6 -ml-24">
        <motion.h1
          className="text-4xl font-semibold"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm SaptaDev27
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-semibold text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A  Full Stack Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-semibold text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}

      <div className="flex- flex-col space-y-6 md:hidden -mt-12">
        <motion.p
          className="text-4xl font-bold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm SaptaDev27
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
