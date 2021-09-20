/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 17 18.8">
      <path d="M16.5,3.6h-3.9V2.3c0-1.3-1-2.3-2.3-2.3H6.7C5.5,0,4.4,1,4.4,2.3v1.3H0.5C0.2,3.6,0,3.8,0,4.1s0.2,0.5,0.5,0.5h1.3v11.9
	c0,1.3,1,2.3,2.3,2.3h8.9c1.3,0,2.3-1,2.3-2.3V4.6h1.3c0.3,0,0.5-0.2,0.5-0.5S16.8,3.6,16.5,3.6z M5.4,2.3C5.4,1.6,6,1,6.7,1h3.6
	c0.7,0,1.3,0.6,1.3,1.3v1.3H5.4V2.3z M14.2,16.5c0,0.7-0.6,1.3-1.3,1.3H4.1c-0.7,0-1.3-0.6-1.3-1.3V4.6h11.4V16.5z"/>
    </SvgIcon>
  );
};
