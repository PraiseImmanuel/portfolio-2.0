import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar.png"}
        width={435}
        height={630}
        alt=""
        className="translate-z-0 w-[435px] xl:w-[28vw] h-auto"
      />
    </div>
  );
};

export default Avatar;
