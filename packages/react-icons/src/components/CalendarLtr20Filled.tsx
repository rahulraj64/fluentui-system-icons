import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarLtr20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5V6h14v-.5A2.5 2.5 0 0014.5 3h-9zM17 7H3v7.5A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5V7zm-9 3a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 110-2 1 1 0 010 2zm4-4a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 110-2 1 1 0 010 2zm4-4a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
};

export default CalendarLtr20Filled;