import xm12js from 'xml2js';
import { JobProps } from '@/types';

export const users = [{
  id: "1",
  email: "mishanep@gmail.com",
  name: "Misha Nep",
  password: "12345",
  role: "admin",
},
{
  id: '4',
  email: 'ilyaptakh@gmail.com',
  name: 'Illia Pahfkjdhfkj',
  password: '12345',
  role: 'admin',

},
{
  id: "2",
  email: "admin@pcgramota.ru",
  name: "Super Admin",
  password: "12345",
  role: "admin",
},
{
  id: "3",
  email: "any@gmail.com",
  name: "Just a Guest",
  password: "12345",
  role: "guest",
},]

export async function fetchVacancies(): Promise<JobProps[]> {
  try {
    const response = await fetch('https://devitjobs.uk/job_feed.xml');
    const text = await response.text();

    const parser = new xm12js.Parser();
    const parserData = await parser.parseStringPromise(text);

    if (!parserData.jobs || !parserData.jobs.job) {
      return [];
    }

    const jobs = parserData.jobs.job
      .slice(0, 150)
      .map((job: any): JobProps => ({
      id: job.id[0],
      title: job.title[0],
      description: job.description[0],
      link: job.link[0],
      country: job.country[0],
      region: job.region[0],
      location: job.location[0],
      logo: job.logo[0],
      salary: job.salary[0],
      company: job.company[0],
      jobtype: job.jobtype[0],
      pubdate: job.pubdate[0],
    }))

    return jobs;
  } catch (error) {
    throw error;
  }
}


export async function fetchVacancyById(id: string): Promise<JobProps | null> { 
  try {
    const response = await fetch(`https://devitjobs.uk/job_feed.xml`);
    const text = await response.text();

    const parser = new xm12js.Parser();
    const parserData = await parser.parseStringPromise(text);

    if (!parserData.jobs || !parserData.jobs.job) {
      return null;
    }

    const job = parserData.jobs.job.find((job: any) => job.id[0] === id);

    if(!job) {
      return null;
    }

    const vacancy: JobProps = {
      id: job.id[0],
      title: job.title[0],
      description: job.description[0],
      link: job.link[0],
      country: job.country[0],
      region: job.region[0],
      location: job.location[0],
      logo: job.logo[0],
      salary: job.salary[0],
      company: job.company[0],
      jobtype: job.jobtype[0],
      pubdate: job.pubdate[0],
    }

    return vacancy;
  } catch (error) {
    throw error;
  }
}


