import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative w-[150px] h-[150px] flex justify-center items-center
        bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded-text.png"
          width={106}
          height={112}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[106px] max-h-[112px]"
        />
        <HiArrowRight
          className="absolute text-3xl group-hover:translate-x-2
      transition-all duration-300"
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
