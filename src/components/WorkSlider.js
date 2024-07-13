// icons
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

// data
const workSlides = [
  {
    title: "https://mira-ai-prx.vercel.app/",
    path: "/mira.PNG",
    technologies: "NextJS, Typescript, Redux Toolkit, Tailwindcss",
    project: "Mira Ai",
  },
  {
    title: "https://electronic-gadgets.netlify.app/",
    path: "/thumb-two.jpg",
    technologies: "NextJS, Typescript, Redux Toolkit, Styled-Component",
    project: "Ecommerce Template",
  },
  {
    title: "https://www.williamsobaedo.com.ng/books",
    path: "/willams-obaedo.PNG",
    technologies: "NextJS, Typescript, Tailwindcss",
    project: "Williams Obaedo",
  },
];

const WorkSlider = () => {
  return (
    <div className="grid gap-8 grid-cols-12 mb-10 md:mb-0 items-center sm:justify-items-center lg:justify-items-start">
      {workSlides.map((image, index) => (
        <div
          key={index}
          className="flex flex-col
          justify-center col-span-12 md:col-span-6 max-w-[300px] md:max-w-[350px]"
        >
          <Link
            href={image.title}
            target="_blank"
            rel="noreferer noopener"
            className="group rounded-lg relative"
          >
            <div
              className="flex items-center justify-center relative
                overflow-hidden"
            >
              <Image
                src={image.path}
                className="max-w-[300px] md:max-w-[350px] h-[200px] object-cover"
                width={500}
                height={300}
                alt=""
              />

              <div
                className="absolute inset-0 bg-gradient-to-l group
                from-transparent via-[#e838cc] to-[#4a22bd] opacity-80
                transition-all duration-700"
              >
                <div
                  className="absolute bottom-1/2 w-full
                     translate-y-1/2
                     transition-all duration-300"
                >
                  <div className="flex justify-center items-center gap-x-2 text-[13px] tracking-[0.1em]">
                    <div>
                      <div className="text-left">{image.project}</div>
                      <div className="text-left">Project</div>
                      <div>
                        <BsArrowRight className="text-xl group-hover:translate-x-[100%] translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <p className="text-sm mt-3 tracking-[0.025em]">
            <span className="font-bold"> Technologies:</span>{" "}
            {image.technologies}
          </p>
          {/* <p className="text-sm font-light mt-5">Project: {image.project}</p> */}
        </div>
      ))}
    </div>
  );
};

export default WorkSlider;
