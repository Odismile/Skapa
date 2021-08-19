/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="-1 -1 17 17">
      <g>
        <path d="M7.5,15.5c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8s8,3.59,8,8C15.5,11.91,11.91,15.5,7.5,15.5z M7.5,0.5
        c-3.86,0-7,3.14-7,7s3.14,7,7,7c3.86,0,7-3.14,7-7S11.36,0.5,7.5,0.5z"/>
        <path d="M10.5,9.5c-0.08,0-0.15-0.02-0.22-0.05l-3-1.5C7.11,7.86,7,7.69,7,7.5V3c0-0.28,0.22-0.5,0.5-0.5S8,2.72,8,3
        v4.19l2.72,1.36c0.25,0.12,0.35,0.42,0.22,0.67C10.86,9.4,10.68,9.5,10.5,9.5z"/>
      </g>
    </SvgIcon>
  );
};
