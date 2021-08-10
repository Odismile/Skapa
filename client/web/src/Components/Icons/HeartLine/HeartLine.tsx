/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 21 21" >
      <g>
        <path d="M15,0c-1.4,0.1-2.8,0.8-3.8,1.9l-0.7,0.8L9.8,1.9c-2.2-2.6-5.9-2.6-8.1,0c-2.2,2.5-2.2,6.7,0,9.2
          l8.5,9.7c0.2,0.2,0.5,0.2,0.7,0l8.5-9.7C20.4,9.9,21,8.3,21,6.5s-0.6-3.4-1.7-4.6C18.2,0.7,16.7,0,15.2,0L15,0z M15.2,1
          c1.3,0,2.5,0.6,3.4,1.6c0.9,1,1.4,2.5,1.4,3.9s-0.5,2.9-1.4,3.9l-8.1,9.3l-8.1-9.3c-1.9-2.2-1.9-5.7,0-7.9c1.9-2.1,4.9-2.1,6.7,0
          l1,1.2c0.2,0.2,0.5,0.2,0.7,0l1-1.2C12.7,1.6,14,1,15.2,1z"/>
      </g>
    </SvgIcon>
  );
};
