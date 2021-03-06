import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Dumbbell24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.77 7.8a.75.75 0 01-1.06 1.06L15.14 7.3a.75.75 0 011.06-1.06l1.57 1.57zm-8.38 9.44c.3-.3.3-.77 0-1.07l-1.57-1.56a.75.75 0 10-1.06 1.06l1.57 1.57c.3.29.77.29 1.06 0zM20.94 3.08a1.94 1.94 0 00-2.75 0l-.67.68-.2-.21a2.41 2.41 0 00-3.67.29 2.93 2.93 0 00-2.6 4.96l.7.72-2.23 2.24-.72-.72a2.94 2.94 0 00-4.96 2.61 2.42 2.42 0 00-.3 3.67l.21.2-.69.7a1.94 1.94 0 102.75 2.74l.69-.7.2.22a2.41 2.41 0 003.67-.3 2.93 2.93 0 002.61-4.96l-.72-.72 2.24-2.24.72.72a2.94 2.94 0 004.96-2.61c.1-.07.2-.16.3-.25.94-.94.94-2.47 0-3.41l-.21-.2.67-.68c.76-.76.76-1.99 0-2.75zM19.2 5.44l-.63-.62.67-.67a.44.44 0 01.63.62l-.67.67zm-5.77 5.76l-2.24 2.24-.62-.62 2.24-2.24.62.62zm-8 8l-.7.7a.44.44 0 11-.62-.62l.7-.7.62.63zm9.52-14.6a.91.91 0 011.3 0l3.15 3.17a.91.91 0 01-.36 1.51.75.75 0 00-.45 1.03 1.44 1.44 0 01-2.32 1.61L12.1 7.74a1.44 1.44 0 011.62-2.32.75.75 0 001.02-.45.9.9 0 01.22-.36zm-9.25 7.5a1.44 1.44 0 012.03 0l4.18 4.18a1.44 1.44 0 01-1.61 2.32.75.75 0 00-1.03.45.91.91 0 01-1.51.36L4.6 16.25a.91.91 0 01.36-1.5.75.75 0 00.45-1.03 1.44 1.44 0 01.29-1.62z" fill={primaryFill} /></svg>;
};

export default Dumbbell24Regular;