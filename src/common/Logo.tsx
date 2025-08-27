import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <>
      <Link href='/' className='flex items-center gap-2'>
        <Image src='/logo.png' alt='Logo' width={100} height={100} />
      </Link>
    </>
  )
}

export default Logo