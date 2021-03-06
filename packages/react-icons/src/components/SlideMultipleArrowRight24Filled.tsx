import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideMultipleArrowRight24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 3A3.25 3.25 0 002 6.25v8.5C2 15.99 3 17 4.25 17h.25V8.75c0-1.8 1.46-3.25 3.25-3.25H19v-.25C19 4.01 18 3 16.75 3H5.25z" fill={primaryFill} /><path d="M7.75 6.5c-1.24 0-2.25 1-2.25 2.25v9.5c0 1.24 1 2.25 2.25 2.25h3.98A6.5 6.5 0 0122 12.81V8.75c0-1.24-1-2.25-2.25-2.25h-12z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-8.5-.5a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L19.29 17H14.5z" fill={primaryFill} /></svg>;
};

export default SlideMultipleArrowRight24Filled;