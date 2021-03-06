import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReadingList20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 5.5a1 1 0 011.84-.56.75.75 0 101.24-.83A2.5 2.5 0 104.6 8h10.67a.75.75 0 000-1.5H4.5a1 1 0 01-1-1z" fill={primaryFill} /><path d="M9.75 4a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" fill={primaryFill} /><path d="M5.75 9a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H5.75z" fill={primaryFill} /><path d="M2 12.25c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M5.75 14a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H5.75z" fill={primaryFill} /></svg>;
};

export default ReadingList20Filled;