import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSwap20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.15 3.15c.2-.2.5-.2.7 0l3 3c.2.2.2.5 0 .7l-3 3a.5.5 0 01-.7-.7L14.29 7H4.5a.5.5 0 010-1h9.8l-2.15-2.15a.5.5 0 010-.7z" fill={primaryFill} /><path d="M7.85 10.15c.2.2.2.5 0 .7L5.71 13h9.79a.5.5 0 010 1H5.7l2.15 2.15a.5.5 0 01-.7.7l-3-3a.5.5 0 010-.7l3-3c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
};

export default ArrowSwap20Regular;