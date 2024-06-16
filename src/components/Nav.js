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
    name: "Mail",
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
        gap-y-10 px-6 py-4 max-w-[320px] 
      bg-white/20 backdrop-blur-sm text-2xl rounded-full"
      >
        {navData.map((link, index) => (
          <Link
            className={`${link.path === pathname && "text-accent"}
            relative flex items-center group hover:text-accent transition-all duration-300`}
            key={index}
            href={link.path}
          >
            <div className="flex items-center flex-col">
              {/* Icon */}
              <div>{link.icon}</div>
              <div className="text-[12px] capitalize leading-none font-normal">
                {link.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
