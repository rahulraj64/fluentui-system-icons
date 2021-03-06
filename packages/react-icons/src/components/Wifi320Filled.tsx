import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Wifi320Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.95 11.84c.37.36.67.8.87 1.28a.75.75 0 01-1.37.6 2.63 2.63 0 00-4.82-.01.75.75 0 11-1.38-.6 4.13 4.13 0 016.7-1.27zm-2.03 2.04a1.24 1.24 0 11-1.76 1.76 1.24 1.24 0 011.76-1.76z" fill={primaryFill} /></svg>;
};

export default Wifi320Filled;