import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Header from "../../components/Header";

const Testimonial = () => {
  return (
    <div className="min-h-[100dvh] bg-primary/30 text-center xl:text-left pb-24">
      <Header />
      <div className="container mx-auto h-full flex flex-col justify-center pt-5 md:pt-12">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0 text-center"
        >
          Feedbacks
          <span className="text-accent"> resonates</span>
        </motion.h2>
        {/* </div> */}
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=""
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
