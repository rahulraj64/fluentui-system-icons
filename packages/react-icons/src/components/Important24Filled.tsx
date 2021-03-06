import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Important24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a3.88 3.88 0 00-3.88 3.88c0 2.92 1.21 6.55 1.82 8.2A2.19 2.19 0 0012 15.5c.9 0 1.74-.54 2.06-1.42.61-1.64 1.82-5.25 1.82-8.2A3.88 3.88 0 0012 2z" fill={primaryFill} /><path d="M12 17a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill={primaryFill} /></svg>;
};

export default Important24Filled;