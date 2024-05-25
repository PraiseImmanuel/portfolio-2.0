import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Header from "../../components/Header";

const Work = () => {
  return (
    <div className="min-h-[1100px] xl:min-h-screen bg-primary/30 text-center xl:text-left">
      <div className="min-h-[1100px] xl:min-h-screen relative">
        <Header />
        <div className="hidden sm:block">
          <Circles />
        </div>
        <Bulb />
        <div className="pt-5 md:pt-12 mx-auto container">
          <div className="flex flex-col xl:flex-row gap-x-3">
            <div
              className="text-center flex xl:w-[30vw flex-col lg:text-left
              mb-4 xl:mb-0"
            >
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-8"
              >
                My Works
                <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                I&apos;ve had the opportunity to work on several projects over
                the last few years of my career. Feel free to explore some of
                the projects I have worked on by clicking the images.
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
