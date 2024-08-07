import React from "react";
import ProjectsBtn from "../components/ProjectsBtn";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { fadeIn } from "../../variants";
import Header from "../components/Header";
import { useEffect } from "react";
import useMediaQuery from "../lib/hooks/useMediaQuery";

const COLORS = ["#4b3792", "#3b2d71", "#dd335c90", "#2e2257"];

const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1199px)");
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(200% 135% at 50% 0%, #020617 50%, ${color} 100%)`;
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);
  return (
    <motion.div
      style={{ backgroundImage: isSmallScreen ? backgroundImage : undefined }}
      className="bg-primary/30 min-h-[700px] md:min-h-screen"
    >
      <div
        className="w-full min-h-[700px] md:min-h-screen bg-gradient-to-r from-primary/10 
        via-black/30 to-black/10 xl:p-0 relative"
      >
        <div className="min-h-screen relative">
          <Header />
          <div className="flex">
            <div className="text-center flex flex-col justify-center xl:pt-24 xl:text-left container mx-auto">
              {/* Title */}
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h1"
              >
                <span className="text-accent">Crafting</span> Seamless <br />{" "}
                Experiences from <br />
                Concept <span className="text-accent">to Reality</span>.
              </motion.h1>

              {/* Sub title */}
              <motion.p
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-[335px] xl:max-w-lg mx-auto xl:mx-0 mb-10 xl:mb-16"
              >
                Creating visually stunning web applications is an art form. From
                sleek layouts to captivating animations, every element is
                carefully crafted to ensure functional and aesthetic appeal.
              </motion.p>
              {/* Btn */}
              <div className="flex pb-32 justify-center xl:hidden relative">
                <ProjectsBtn />
              </div>
              <motion.div
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden xl:flex"
              >
                <ProjectsBtn />
              </motion.div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="w-full h-full absolute right-0 bottom-0 overflow-y-hidden">
          <div
            className="bg-none xl:bg-explosion xl:bg-right-bottom
          xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge"
          ></div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-fit h-fit absolute
            lg:-bottom-10 lg:right-[8%]"
          >
            {/* <Avatar /> */}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
