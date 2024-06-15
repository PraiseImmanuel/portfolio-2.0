// icons
import {
  HiHome,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "Reviews",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "Msg..",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav
      className="flex items-center gap-y-4 z-50 
     fixed bottom-[16px] lg:bottom-[36px] w-full px-2"
    >
      <div
        className="flex w-full items-center justify-between mx-auto
        gap-y-10 px-4 py-5 max-w-[320px] 
      bg-white/20 backdrop-blur-sm text-2xl rounded-full"
      >
        {navData.map((link, index) => (
          <Link
            className={`${link.path === pathname && "text-accent"}
            relative flex items-center group hover:text-accent transition-all duration-300`}
            key={index}
            href={link.path}
          >
            {/* tooltip */}
            <div className="absolute pr-14 -top-8 -right-[50%] translate-x-[50%] flex capitalize rounded-full">
              <div className="bg-white/10 relative flex text-white items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-normal">
                  {link.name}
                </div>
              </div>
            </div>
            {/* Icon */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
