'use client'


import { CustomButton } from '.'
import Link from 'next/link'

export const Hero = () => {

  return (
    <div className='hero  h-full flex'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Find your dream job -- quickly and easily!
        </h1>
        <p className='hero__subtitle'>
          Streamline your job search experience with us
        </p>

        <Link
          href={'/jobs'}
          className='bg-violet-900 text-white rounded-full px-10 py-5'
        >
          Find job
        </Link>
      </div>
    </div>
  )
}

export default Hero