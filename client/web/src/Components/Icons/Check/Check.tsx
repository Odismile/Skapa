/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 17 13" >
      <g>
        <path d="M5.7,13c-0.3,0-0.5-0.1-0.7-0.3l-4.7-5c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l4,4.2l9.6-10.2c0.4-0.4,1-0.4,1.4,0
	c0.4,0.4,0.4,1,0,1.4l-10.3,11C6.2,12.9,6,13,5.7,13z"/>
      </g>
    </SvgIcon>
  );
};
