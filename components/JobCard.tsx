'use client'
import { JobProps } from '@/types'
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';

interface JobCardProps {
  job: JobProps
}

const JobCard = ({ job }: JobCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav: JobProps) => fav.id !== job.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      localStorage.setItem('favorites', JSON.stringify([...favorites, job]));
    }
  }

  return (
    <div
      key={job.id}
      className="rounded-md w-full bg-white px-4 py-4 shadow-md transition transform duration-500 cursor-pointer border flex gap-3 justify-between"
    >
      <div className="flex flex-col justify-start">
        <div className="text-sm font-semibold text-bookmark-blue flex space-x-1 items-center mb-2 gap-3">
          <Image
            src={job.logo}
            alt='Job Logo'
            width={28}
            height={28}
            className='rounded-full'
          />
          <span>{job.company}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-bookmark-blue flex space-x-1 items-center mb-2">
            <svg className="w-7 h-7 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            <span>{job.title}</span>
          </div>
        </div>
        <div className="text-sm text-gray-500 flex space-x-1 items-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>{job.location}</span>
        </div>
        <div>
          <div className="mt-5">
            <Link href={`/jobs/job-details/${job.id}`} className="mr-2 my-1 uppercase tracking-wider px-2 text-violet-900 border-violet-900 hover:bg-violet-900 hover:text-white border text-sm font-semibold rounded py-1 transition transform duration-500 cursor-pointer">
              Apply
            </Link>
          </div>
        </div>
      </div>
      <div>
      <button
        className={`hover:text-white h-30 text-sm font-semibold rounded py-1 transition transform duration-500 cursor-pointer`}
        onClick={handleToggleFavorite}
      >
        {isFavorite ? <Image src="/heart.png" width={25} height={25} alt='liked' /> : <Image src="/like.png" width={25} height={25} alt='like'/>}
      </button>
      </div>
    </div>
  )
}

export default JobCard