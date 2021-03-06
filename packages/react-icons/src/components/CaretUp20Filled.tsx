import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretUp20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.8 13.9a1 1 0 01-.78-1.62l3.81-4.72a1.5 1.5 0 012.34 0l3.81 4.72a1 1 0 01-.78 1.63H5.8z" fill={primaryFill} /></svg>;
};

export default CaretUp20Filled;