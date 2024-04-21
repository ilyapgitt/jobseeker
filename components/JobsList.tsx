'use client'

import React, { useState } from 'react'
import {Search, JobCard} from '@/components';
import { JobProps } from '@/types';
import Pagination from './Pagination';


export default function JobsList({ isDataEmpty, allVacancies }: {isDataEmpty: boolean, allVacancies: JobProps[]}) {
  const [ value, setValue ] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [jobsPerPage] = useState(10)

  const filteredJobs = allVacancies.filter(job => {
    return job.title.toLowerCase().includes(value.toLowerCase())
  })

  const lastJobsIndex = currentPage * jobsPerPage;
  const firstJobsIndex = lastJobsIndex - jobsPerPage;
  const totalJobs = filteredJobs.length
  const currentJobs = filteredJobs.slice(firstJobsIndex, lastJobsIndex)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <>
      {!isDataEmpty ? (
        <section className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <Search 
              placeholder="Enter ..." 
              setValue={setValue} 
            />
            <h1 className="text-[30px] font-extrabold">Offers:</h1>
          </div>
          <div className='mt-12 flex flex-col gap-5'>
            {currentJobs?.map((job) => (
              <JobCard job={job} key={job.id}/>
            ))
            }
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-x1 font-bold">Oops, no results</h2>
        </div>
      )}
      <Pagination 
        jobsPerPage={jobsPerPage} 
        totalJobs={totalJobs} 
        paginate={paginate}
      />
    </>
  )
}