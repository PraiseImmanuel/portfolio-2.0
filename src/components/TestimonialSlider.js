// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];
import { FaQuoteLeft } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeButtons, setFadeButtons] = useState({
    fadeLeft: false,
    fadeRight: true,
  });

  const handleNext = () => {
    if (currentIndex >= testimonialData.length - 2) {
      setFadeButtons((prevState) => ({ ...prevState, fadeRight: false }));
    }
    if (currentIndex < testimonialData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFadeButtons((prevState) => ({ ...prevState, fadeLeft: true }));
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFadeButtons((prevState) => ({ ...prevState, fadeRight: true }));
    }

    if (currentIndex <= 1) {
      setFadeButtons((prevState) => ({ ...prevState, fadeLeft: false }));
    }
  };
  return (
    <>
      <div className="flex justify-between items-center py-10 md:min-h-[370px] w-full">
        <div onClick={handlePrevious} className="z-20 cursor-pointer">
          <FaChevronLeft
            className={`${
              fadeButtons.fadeLeft ? "text-accent" : "text-accent/20"
            } transition-all text-lg`}
          />
        </div>
        <div className={`w-full flex overflow-hidden`}>
          {testimonialData.map((person, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center w-full px-2 min-w-[100%] text-center transition-all duration-300`}
              style={{ translate: `${-100 * currentIndex}%` }}
            >
              <div
                className="flex flex-col items-center md:flex-row gap-8
            h-full px-4 sm:px-16 w-full"
              >
                <div
                  className="w-full max-w-[300px] flex flex-col xl:justify-center
              items-center relative mx-auto xl:mx-0 h-full"
                >
                  <div className="flex w-full flex-col justify-center items-center text-center">
                    <div className="mb-2 mx-auto">
                      <Image
                        src={person.image}
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div className="text-lg">{person.name}</div>
                    <div
                      className="text-[12px] uppercase font-extralight
                "
                    >
                      {person.position}
                    </div>
                  </div>
                </div>

                <div
                  className="md:flex-1 flex flex-col justify-center before:w-[1px] 
            xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20"
                >
                  <div className="hidden md:block">
                    <FaQuoteLeft
                      className="text-4xl xl:text-6xl text-white/20 
                 mx-auto md:mx-0"
                    />
                  </div>
                  <div className="text-sm font-[300] xl:text-lg text-center md:text-left mt-3">
                    {person.message}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div onClick={handleNext} className="z-20 cursor-pointer">
          <FaChevronRight
            className={`${
              fadeButtons.fadeRight ? "text-accent" : "text-accent/20"
            } transition-all`}
          />
        </div>
      </div>
      <div className="flex gap-2 justify-center mt-10 md:mt-0 mb-20">
        {testimonialData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-accent" : "bg-accent/20"
            }`}
          ></div>
        ))}
      </div>
    </>
  );
};

export default TestimonialSlider;
