import Image from "next/image";
import Link from "next/link";

const Logo = ({ size, className = "" }) => {
  return (
    <Link href="/" className={`p-2 bg-white rounded-full ${className}`}>
      <Image
        src="/images/logo.png"
        width={size}
        height={size}
        alt="Eagle Locksmith Logo"
      />
    </Link>
  );
};

export default Logo;
