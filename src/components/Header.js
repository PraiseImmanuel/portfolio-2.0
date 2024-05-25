import Link from "next/link";
import Socials from "../components/Socials";
const Header = () => {
  return (
    <header className="w-full z-30 relative">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row justify-between items-center gap-y-6
        py-8 "
        >
          <Link href={"/"}>
            <p className="text-2xl text-white font-[700] mt-2 font-fam">
              Praise<span className="font-[300]"> Immanuel</span>
              <span className="text-accent ">.</span>
            </p>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
