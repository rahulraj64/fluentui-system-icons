import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GridKanban20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3a1 1 0 011-1h5a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm6 0H3v2h5V3z" fill={primaryFill} /><path d="M2 9a1 1 0 011-1h5a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V9zm6 0H3v2h5V9z" fill={primaryFill} /><path d="M3 14a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1v-2a1 1 0 00-1-1H3zm0 1h5v2H3v-2z" fill={primaryFill} /><path d="M11 3a1 1 0 011-1h5a1 1 0 011 1v2a1 1 0 01-1 1h-5a1 1 0 01-1-1V3zm6 0h-5v2h5V3z" fill={primaryFill} /><path d="M12 8a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V9a1 1 0 00-1-1h-5zm0 1h5v2h-5V9z" fill={primaryFill} /></svg>;
};

export default GridKanban20Regular;