import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Flag28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 18h17.75c.59 0 .95-.65.63-1.15l-4-6.35 4-6.35A.75.75 0 0023.25 3H4.75a.75.75 0 00-.75.75v20.5a.75.75 0 001.5 0V18z" fill={primaryFill} /></svg>;
};

export default Flag28Filled;