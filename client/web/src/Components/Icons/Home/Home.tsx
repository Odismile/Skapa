/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 16.3 18">
      <path d="M16.1,6.1l-7.6-6C8.3,0,8,0,7.8,0.1l-7.6,6C0.1,6.2,0,6.3,0,6.5v9.4C0,17,1,18,2.2,18h11.9c1.2,0,2.2-1,2.2-2.2V6.5
      C16.3,6.3,16.2,6.2,16.1,6.1z M10.2,17H6.1V9.5h4.1V17z M15.3,15.8c0,0.7-0.5,1.2-1.2,1.2h-2.9V9c0-0.3-0.2-0.5-0.5-0.5H5.6
      C5.3,8.5,5.1,8.7,5.1,9v8H2.2C1.5,17,1,16.5,1,15.8V6.7l7.1-5.6l7.1,5.6V15.8z"/>
    </SvgIcon>
  );
};
