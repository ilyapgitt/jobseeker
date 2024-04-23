'use client'
import Link from "next/link"
import Image from "next/image"

import { CustomButton } from "."
import { signOut, useSession } from "next-auth/react"

const Navbar = () => {

  const session = useSession()
  console.log(session)

  return (
    <header className="w-full fixed top-0 z-10 bg-white shadow-md">
      <nav className="max-w-[1440px] mx-auto flex justify-between sm:px-16 px-6 py-4">
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

          {session?.data
            ? <Link
              href={'#'}
              className='bg-violet-900 text-white rounded-full px-6 py-2'
              onClick={() => signOut({
                callbackUrl: '/'
              })}
            >
              Sign Out
            </Link>
            : <Link
              href={'/api/auth/signin'}
              className='bg-violet-900 text-white rounded-full px-6 py-2'
            >
              SignIn
            </Link>
          }

          {session?.data && (
            <Link href={'/profile'} className="flex justify-center items-center ml-5">Profile</Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar