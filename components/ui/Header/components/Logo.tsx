import Image from "next/image";
import LogoSvg from "@/assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src={LogoSvg}
        alt="Logo"
        width={96}
        height={96}
        className="w-24 h-auto"
      />
    </div>
  );
};

export default Logo;
