import Image from "next/image";

const Logo = ({ size, className = "" }) => {
  return (
    <div className={`p-2 bg-white rounded-full ${className}`}>
      <Image
        src="/images/logo.png"
        width={size}
        height={size}
        alt="Eagle Locksmith Logo"
      />
    </div>
  );
};

export default Logo;
