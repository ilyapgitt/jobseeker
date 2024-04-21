import Link from "next/link"
import Image from "next/image"

import { CustomButton } from "."

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 z-10 bg-white shadow-md">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link
          href={'/'}
          className="flex justify-center items-center"
        >
          <Image
            src={'./logo.svg'}
            alt="Job seeker logo"
            width={148}
            height={25}
            className="object-contain"
          />
        </Link>

        <div className="flex space-between">
          <Link
            href={'/liked'}
            className="flex justify-center items-center mx-5"
          >
            <Image 
              src='/like.png'
              alt="liked link"
              width={25}
              height={25}
            />
          </Link>

          <CustomButton
            title="Sign Up"
            containerStyles="bg-violet-900 text-white rounded-full min-w-[130px] max-h-[45px]"
            btnType='button'
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar