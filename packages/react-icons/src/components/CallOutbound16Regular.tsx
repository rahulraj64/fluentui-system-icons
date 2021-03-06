import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallOutbound16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 01-1 0V3.7L9.85 6.86a.5.5 0 11-.7-.7L12.29 3H10.5a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M4.37 2.12c.86-.32 1.8.06 2.2.89l.58 1.22a1.5 1.5 0 01-.19 1.6l-.94 1.16A4.16 4.16 0 007.37 9.3l1.5-.27c.5-.1 1.01.07 1.36.44l.8.84c.68.7.65 1.82-.05 2.48l-.3.28c-1.13 1.06-2.88 1.3-4.13.25a14.37 14.37 0 01-2.92-3.21 12.17 12.17 0 01-1.59-4.55 3.1 3.1 0 012.07-3.34l.26-.1zm2.87 7.72l-.3.4a1.76 1.76 0 01-.13-.1A4.98 4.98 0 014.99 6.9V6.9l.5-.06-.5.05a.5.5 0 01.11-.36L6.2 5.19a.5.5 0 00.06-.53l-.58-1.22a.75.75 0 00-.94-.38l-.27.1c-.98.36-1.58 1.28-1.43 2.24.2 1.26.6 2.86 1.44 4.17a13.37 13.37 0 002.71 2.98c.8.67 2 .57 2.81-.2l.3-.28c.3-.3.31-.77.03-1.07l-.81-.84a.5.5 0 00-.45-.15l-1.73.32a.5.5 0 01-.38-.08l.29-.41z" fill={primaryFill} /></svg>;
};

export default CallOutbound16Regular;