import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Image
        className='dark:hidden my-4'
        width='200'
        height='200'
        src='/logo-white.png'
        alt='logo'
      />
      <Image
        className='hidden dark:block my-4'
        width='200'
        height='200'
        src='/logo-dark.png'
        alt='logo'
      />
    </Link>
  );
};

export default Logo;
