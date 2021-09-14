/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <path d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8C16,3.6,12.4,0,8,0z M1.4,8
      c0-3.7,3-6.6,6.6-6.6c1.6,0,3.1,0.6,4.2,1.5l-9.3,9.3C2,11.1,1.4,9.6,1.4,8z M8,14.6c-1.5,0-3-0.5-4.1-1.4l9.3-9.3
      C14.1,5,14.6,6.5,14.6,8C14.6,11.7,11.7,14.6,8,14.6z"/>
    </SvgIcon>
  );
};
