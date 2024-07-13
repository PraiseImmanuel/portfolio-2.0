import Link from "next/link";
import {
  RiTwitterXFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiWhatsappFill,
} from "react-icons/ri";

export const links = [
  {
    svg: <RiLinkedinBoxFill />,
    route: "https://www.linkedin.com/in/praise-immanuel-919b99209/",
  },
  {
    svg: <RiGithubFill />,
    route: "https://github.com/PraiseImmanuel",
  },
  {
    svg: <RiWhatsappFill />,
    route: "https://wa.me/+23457422372",
  },
  {
    svg: <RiTwitterXFill className="text-lg" />,
    route: "https://x.com/_PraiseImmanuel",
  },
];

const Socials = () => {
  return (
    <div className="hidden lg:flex items-center gap-x-5 text-xl border-2 border-white/10 rounded-lg py-1 px-4">
      {links.map((item, index) => (
        <Link
          key={index}
          href={item.route}
          className="hover:text-accent transition-all duration-300 cursor-pointer"
          target="_blank"
        >
          {item.svg}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
