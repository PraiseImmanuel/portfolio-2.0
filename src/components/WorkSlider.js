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
    title: "https://fruity-plum.vercel.app/",
    path: "/thumb-one.PNG",
  },
  {
    title: "https://electronic-gadgets.netlify.app/",
    path: "/thumb-two.jpg",
  },
  {
    title: "https://advice-website.netlify.app/",
    path: "/thumb-three.jpg",
  },
];

const WorkSlider = () => {
  return (
    <div className="grid gap-5 grid-cols-12 mb-10 md:mb-0">
      {workSlides.map((image, index) => (
        <Link
          key={index}
          href={image.title}
          target="_blank"
          rel="noreferer noopener"
          className="relative rounded-lg overflow-hidden flex 
              justify-center group col-span-12 md:col-span-6"
        >
          <div
            className="flex items-center justify-center relative
                overflow-hidden"
          >
            <Image
              src={image.path}
              className="max-w-[350px]"
              width={500}
              height={300}
              alt=""
            />
            <div
              className="absolute inset-0 bg-gradient-to-l 
                    from-transparent via-[#e838cc] to-[#4a22bd] opacity-80
                  transition-all duration-700"
            >
              <div
                className="absolute bottom-1/2 w-full
                     translate-y-1/2
                     transition-all duration-300"
              >
                <div className="flex justify-center items-center gap-x-2 text-[13px] tracking-[0.2em]">
                  <div>
                    <div className="delay-100">LIVE</div>
                    <div
                      className="translate-y-0 transition-all
                        duration-300 delay-150"
                    >
                      PROJECT
                    </div>
                    <div>
                      <BsArrowRight
                        className="text-xl translate-y-0 transition-all
                        duration-300 delay-200"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default WorkSlider;
