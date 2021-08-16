/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 15 28" >
      <g>
      <path d="M0.3,0.3c0.4-0.4,0.9-0.4,1.3-0.1l0.1,0.1l13,13c0.4,0.4,0.4,0.9,0.1,1.3l-0.1,0.1l-13,13
		c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-0.9-0.1-1.3l0.1-0.1L12.6,14L0.3,1.7C-0.1,1.3-0.1,0.8,0.3,0.3L0.3,0.3z"/>
      </g>
    </SvgIcon>
  );
};
