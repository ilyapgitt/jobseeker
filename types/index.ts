import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string,
  containerStyles?: string,
  handleClick?: MouseEventHandler<HTMLButtonElement>,
  btnType?: 'button' | 'submit';
}

export interface JobProps {
  id: string,
  title: string,
  description: string,
  link: string,
  country: string,
  region: string,
  location: string,
  logo: string,
  salary: string,
  company: string,
  jobtype: string,
  pubdate: string,
}