/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 15 22" >
      <g>
        <path d="M7.5,14.6C3.4,14.6,0,11.4,0,7.3S3.4,0,7.5,0S15,3.3,15,7.3S11.6,14.6,7.5,14.6z M7.5,1C3.9,1,1,3.8,1,7.3
          c0,3.5,2.9,6.3,6.5,6.3S14,10.8,14,7.3C14,3.8,11.1,1,7.5,1z"/>
        <path d="M2.7,22c-0.1,0-0.2,0-0.3-0.1c-0.2-0.1-0.2-0.3-0.2-0.5L3.3,13c0-0.3,0.3-0.5,0.6-0.4c0.3,0,0.5,0.3,0.4,0.6
          l-1,7.4l4-2.3c0.2-0.1,0.3-0.1,0.5,0l4,2.3l-1-7.4c0-0.3,0.2-0.5,0.4-0.6c0.3,0,0.5,0.2,0.6,0.4l1.2,8.4c0,0.2-0.1,0.4-0.2,0.5
          c-0.2,0.1-0.4,0.1-0.5,0l-4.6-2.6l-4.6,2.6C2.8,22,2.7,22,2.7,22z"/>
      </g>
    </SvgIcon>
  );
};
