import Link from "next/link";
import {
  RiInstagramLine,
  RiDribbbleLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiXboxLine,
  RiTwitterXLine,
  RiTwitterXFill,
  RiGithubFill,
  RiLinkedinFill,
  RiLinkedinBoxFill,
  RiWhatsappFill,
} from "react-icons/ri";

const links = [
  {
    svg: <RiLinkedinBoxFill />,
    route: "",
  },
  {
    svg: <RiGithubFill />,
    route: "",
  },
  {
    svg: <RiWhatsappFill />,
    route: "",
  },
  {
    svg: <RiTwitterXFill className="text-lg" />,
    route: "",
  },
];

const Socials = () => {
  return (
    <div className="hidden lg:flex items-center gap-x-5 text-xl border-2 border-white/10 rounded-lg py-1 px-4">
      {links.map((item, index) => (
        <Link
          key={index}
          href={item.route}
          className="hover:text-accent transition-all duration-300"
        >
          {item.svg}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
