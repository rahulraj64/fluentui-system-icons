import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Briefcase48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 6c-.69 0-1.25.56-1.25 1.25V14h-4.25A6.25 6.25 0 006 20.25v13.5C6 37.2 8.8 40 12.25 40h23.5C39.2 40 42 37.2 42 33.75v-13.5C42 16.8 39.2 14 35.75 14H31.5V7.25c0-.69-.56-1.25-1.25-1.25h-12.5zM29 14H19V8.5h10V14z" fill={primaryFill} /></svg>;
};

export default Briefcase48Filled;