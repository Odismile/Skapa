/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 17.5 17.5">
      <g>
      <path d="M14.97,17.5H2.53C1.13,17.5,0,16.37,0,14.97v-3.56c0-0.41,0.34-0.75,0.75-0.75S1.5,11,1.5,11.42v3.56
			C1.5,15.54,1.96,16,2.53,16h12.44c0.57,0,1.03-0.46,1.03-1.03v-3.56c0-0.41,0.34-0.75,0.75-0.75S17.5,11,17.5,11.42v3.56
			C17.5,16.37,16.37,17.5,14.97,17.5z"/>
		<path d="M8.75,12.17c-0.19,0-0.38-0.07-0.53-0.22L3.78,7.5c-0.29-0.29-0.29-0.77,0-1.06s0.77-0.29,1.06,0l3.91,3.91
			l3.91-3.91c0.29-0.29,0.77-0.29,1.06,0s0.29,0.77,0,1.06l-4.44,4.44C9.13,12.09,8.94,12.17,8.75,12.17z"/>
		<path d="M8.75,12.17C8.34,12.17,8,11.83,8,11.42V0.75C8,0.34,8.34,0,8.75,0S9.5,0.34,9.5,0.75v10.67
			C9.5,11.83,9.16,12.17,8.75,12.17z"/>
      </g>
    </SvgIcon>
  );
};
