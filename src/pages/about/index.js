import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaGit,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTailwindcss,
  SiTypescript,
  SiJquery,
  SiBootstrap,
  SiGithub,
} from "react-icons/si";

import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Core Technologies",
        icons: [
          <FaHtml5 key={0} />,
          <FaCss3 key={1} />,
          <FaJs key={2} />,
          <SiTypescript key={3} />,
          <SiGithub key={4} />,
        ],
      },
      {
        title: "Frameworks",
        icons: [
          <FaReact key={5} />,
          <SiNextdotjs key={6} />,
          <SiTailwindcss key={7} />,
          <SiFramer key={8} />,
          <SiJquery key={9} />,
          <SiBootstrap key={10} />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Top Rated Developer 2023",
        stage: "Zorfts Technologies",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software Engineer Intern - Paritie Innovation Hub",
        stage: "Sept. 2023 - Present",
      },
      {
        title: "Frontend Developer - Zorfts Technologies",
        stage: "July 2023 - Present",
      },
      {
        title: "Frontend Intern - Hotels.ng",
        stage: "Sept. 2022 - Dec. 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Header from "../../components/Header";
const About = () => {
  const [itemIndex, setItemIndex] = useState(0);
  console.log(itemIndex);
  return (
    <div className="min-h-[1100px] md:min-h-[950px] xl:min-h-screen bg-primary/30 text-center xl:text-left">
      <div className="min-h-[1100px] md:min-h-[950px] xl:min-h-screen relative">
        <Header />
        <Circles />

        <div className="pt-5 md:pt-12">
          <div
            className="container mx-auto h-full flex flex-col items-center
            xl:flex-row gap-x-6"
          >
            <div className="flex flex-1 flex-col justify-center">
              <motion.h2
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={fadeIn("right", 0.2)}
                className="h2 max-w-[580px] xl:max-w-[initial] "
              >
                Turning digital <span className="text-accent">ideas</span> into
                tangible
                <span className="text-accent"> products</span>.
              </motion.h2>
              <motion.p
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={fadeIn("right", 0.4)}
                className="max-w-[540px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
              >
                Hello there! I am Praise Immanuel - a web developer with a knack
                for turning code into captivating experiences. With a background
                in Pure and Applied Mathematics and over three years experience.
                I bring a unique blend of creative flair and analytical prowess
                to every project.
              </motion.p>
              <motion.p
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={fadeIn("right", 0.4)}
                className="max-w-[500px] xl:-mt-7 mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
              >
                I prioritize quality and adhere to industry standards, ensuring
                the responsiveness of web apps across devices with a
                mobile-first approach. I have rich experience with ReactJS using
                TypeScript and Next.js. I am currently seeking intermediate dev
                roles.
              </motion.p>
            </div>
            <div className="flex-1 transition-all">
              <motion.div
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={fadeIn("right", 0.6)}
                className="hidden md:flex md:max-w-xl xl:max-w--none mx-auto xl:mx-0
                mb-8"
              >
                {/* <div className="flex flex-1 xl:gap-x-6 ">
                  <div
                    className="relative flex-1 after:w-[1px] after:h-full 
                  after:bg-white/10 after:absolute after:top-0 after:right-0"
                  >
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={3} duration={5} /> +
                    </div>
                    <div
                      className="text-xs uppercase tracking-[1px] leading-[1.4]
                max-w-[100px]"
                    >
                      Years of experience
                    </div>
                  </div>
                  <div
                    className="relative flex-1 after:w-[1px] after:h-full 
                after:bg-white/10 after:absolute after:top-0 after:right-0"
                  >
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={250} duration={5} /> +
                    </div>
                    <div
                      className="text-xs uppercase tracking-[1px] leading-[1.4]
                max-w-[100px]"
                    >
                      Satiisfied clients
                    </div>
                  </div>
                  <div
                    className="relative flex-1 after:w-[1px] after:h-full 
          after:bg-white/10 after:absolute after:top-0 after:right-0"
                  >
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={250} duration={5} /> +
                    </div>
                    <div
                      className="text-xs uppercase tracking-[1px] leading-[1.4]
                max-w-[100px]"
                    >
                      Finished Projects
                    </div>
                  </div>
                  <div
                    className="relative flex-1 after:w-[1px] after:h-full 
          after:bg-white/10 after:absolute after:top-0 after:right-0"
                  >
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={250} duration={5} /> +
                    </div>
                    <div
                      className="text-xs uppercase tracking-[1px] leading-[1.4]
                max-w-[100px]"
                    >
                      Winning Awards
                    </div>
                  </div>
                </div> */}
              </motion.div>
              <motion.div
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={fadeIn("left", 0.4)}
                className="flex flex-1 flex-col w-full"
              >
                <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                  {aboutData.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setItemIndex(index)}
                      className={`cursor-pointer capitalize after:left-0 xl:text-lg 
                relative after:w-8 after:h-[2px] after:absolute after:-bottom-1  ${
                  itemIndex !== index && "after:bg-white"
                }
                ${
                  itemIndex === index &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } 
                `}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
                <div
                  className="py-2 xl:py-6 flex flex-col gap-y-2
                  xl:gap-y-4 items-center xl:items-start"
                >
                  {aboutData[itemIndex].info.map((item, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col 
                      md:flex-row max-w-max gap-x-2 items-center text-white/60"
                    >
                      <div className="font-light mb-2 md:mb-0">
                        {item.title}
                      </div>
                      <div className="hidden md:flex">-</div>
                      <div className="font-[600]">{item.stage}</div>
                      <div className="flex gap-x-4">
                        {item.icons?.map((icon, index) => (
                          <div key={index} className="text-white text-2xl">
                            {icon}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
