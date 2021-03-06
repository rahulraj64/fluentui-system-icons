import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowImport20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 4c.28 0 .5.22.5.5v11a.5.5 0 01-1 0v-11c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M2 10c0-.28.22-.5.5-.5h10.8l-3.15-3.15a.5.5 0 01.7-.7l4 4A.5.5 0 0115 10a.5.5 0 01-.15.35l-4 4a.5.5 0 01-.7-.7l3.14-3.15H2.5A.5.5 0 012 10z" fill={primaryFill} /></svg>;
};

export default ArrowImport20Regular;