import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Image
        className='dark:hidden'
        width='80'
        height='80'
        src='/logo-white.png'
        alt='logo'
      />
      <Image
        className='hidden dark:block'
        width='80'
        height='80'
        src='/logo-dark.png'
        alt='logo'
      />
    </Link>
  );
};

export default Logo;
