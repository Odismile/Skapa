/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 20.3 20.7" >
      <g>
        <path d="M9.7,0c5.4,0,9.7,4.4,9.7,9.7c0,2.5-1,4.8-2.6,6.6l3.1,3.1c0.3,0.3,0.3,0.8,0,1.1
      c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.4-0.1-0.5-0.2l-3.2-3.2c-1.7,1.3-3.8,2.1-6.1,2.1C4.4,19.5,0,15.1,0,9.7S4.4,0,9.7,0z M9.7,1.5
      c-4.5,0-8.2,3.7-8.2,8.2S5.2,18,9.7,18c4.5,0,8.2-3.7,8.2-8.2S14.3,1.5,9.7,1.5z"/>
      </g>
    </SvgIcon>
  );
};
