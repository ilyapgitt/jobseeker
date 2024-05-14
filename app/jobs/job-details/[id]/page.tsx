'use client'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchVacancyById } from '@/utils';
import { JobProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Loading } from '@/components';

const VacancyPage = () => {
  const pathname = usePathname()
  const id = pathname.split('/').pop();
  const [vacancy, setVacancy] = useState<JobProps | null>(null);

  useEffect(() => {
    const fetchVacancy = async () => {
      if (id) {
        const vacancyData = await fetchVacancyById(id);
        setVacancy(vacancyData);
      }
    };
    fetchVacancy();
  }, [id]);

  if (!vacancy) {
    return (
      <main className='mt-24 flex flex-col justify-center'>
        <Loading />
      </main>
    )
  }

  const descriptionHtml = { __html: vacancy.description };

  return (
    <main className="mt-36 max-width flex justify-between">
      <div className='max-w-[600px] mb-28'>
        <h1 className='text-3xl font-bold'>{vacancy.title}</h1>
        <p dangerouslySetInnerHTML={descriptionHtml} className='mt-10'></p>
        <div className="flex space-between mt-10">
          <Link
            href={vacancy.link}
            className='bg-violet-900 text-white rounded-full px-16 py-2'
          >
            Apply
          </Link>

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
        </div>
      </div>
      <div className='flex flex-col gap-7'>
        <Image
          src={vacancy.logo}
          width={100}
          height={100}
          alt='Company Logo'
        />
        <div className='flex flex-col gap-3'>
          <p>{vacancy.jobtype}</p>
          <p>{vacancy.region}</p>
          <p>{vacancy.company}</p>
        </div>
        <div className="flex space-between">
          <Link
            href={vacancy.link}
            className='bg-violet-900 text-white rounded-full px-16 py-2'
          >
            Apply
          </Link>

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
        </div>
      </div>

    </main>
  );
};

export default VacancyPage;
