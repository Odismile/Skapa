/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 20.6 17" >
      <g>
        <path d="M18.3,17h-16C1,17,0,16,0,14.7V4.9c0-1.3,1-2.3,2.3-2.3h3.3l1.6-2.4C7.3,0.1,7.4,0,7.6,0h5.3c0.2,0,0.3,0.1,0.4,0.2L15,2.7
          h3.3c1.3,0,2.3,1,2.3,2.3v9.8C20.6,16,19.5,17,18.3,17z M2.3,3.7C1.6,3.7,1,4.2,1,4.9v9.8C1,15.4,1.6,16,2.3,16h16
          c0.7,0,1.3-0.6,1.3-1.3V4.9c0-0.7-0.6-1.3-1.3-1.3h-3.6c-0.2,0-0.3-0.1-0.4-0.2L12.7,1H7.9L6.2,3.4C6.2,3.6,6,3.7,5.8,3.7H2.3z"/>
        <path d="M10.3,13.4c-2.2,0-4.1-1.8-4.1-4.1S8,5.3,10.3,5.3c2.2,0,4.1,1.8,4.1,4.1S12.5,13.4,10.3,13.4z M10.3,6.3
          c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1C13.3,7.7,12,6.3,10.3,6.3z"/>
      </g>
    </SvgIcon>
  );
};