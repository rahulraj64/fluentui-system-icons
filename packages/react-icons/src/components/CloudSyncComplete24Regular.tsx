import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudSyncComplete24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.2 12.19a.69.69 0 01.94 0c.23.22.26.57.07.82l-.07.08-6 5.72a.69.69 0 01-.93.01l-.08-.07-2-2.55a.62.62 0 01.14-.9.7.7 0 01.86.06l.07.08 1.54 1.95 5.46-5.2zM12 4c3.52 0 5.52 2.27 5.8 5.02h.1c2.26 0 4.1 1.78 4.1 3.99 0 2.2-1.84 3.99-4.1 3.99h-3.41l1.56-1.5H18.06a2.52 2.52 0 002.4-2.5c0-1.31-1.06-2.4-2.4-2.48H17.12l-.1-.01c-.37-.05-.67-.34-.67-.7A4.3 4.3 0 0012 5.46 4.32 4.32 0 007.65 9.8c0 .37-.3.66-.67.7l-.1.01H6.1l-.16.01a2.53 2.53 0 00-2.4 2.33v.32a2.53 2.53 0 002.4 2.33h1.09c-.09.45.01.93.32 1.32l.14.18H6.1A4.05 4.05 0 012 13c0-2.2 1.84-3.98 4.1-3.98h.1C6.47 6.25 8.47 4 12 4z" fill={primaryFill} /></svg>;
};

export default CloudSyncComplete24Regular;