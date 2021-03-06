import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextAddSpaceAfter20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M3 9.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M8.15 14.65a.5.5 0 00.7.7L10 14.21l1.15 1.14a.5.5 0 00.7-.7l-1.5-1.5a.5.5 0 00-.7 0l-1.5 1.5z" fill={primaryFill} /></svg>;
};

export default TextAddSpaceAfter20Regular;