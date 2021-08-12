/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 21.5 21.5">
      <path d="M10.8,21.5C4.8,21.5,0,16.7,0,10.8C0,4.8,4.8,0,10.8,0s10.8,4.8,10.8,10.8C21.5,16.7,16.7,21.5,10.8,21.5z M10.8,1.5
      c-5.1,0-9.2,4.1-9.2,9.2c0,5.1,4.1,9.3,9.2,9.3s9.2-4.1,9.2-9.3C20,5.6,15.9,1.5,10.8,1.5z"/>
      <path d="M10.8,15.5c-0.4,0-0.8-0.3-0.8-0.8v-4c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8v4C11.5,15.2,11.2,15.5,10.8,15.5z"/>
      <path d="M10.8,7.5c-0.4,0-0.8-0.3-0.8-0.8S10.3,6,10.8,6h0c0.4,0,0.8,0.3,0.8,0.8S11.2,7.5,10.8,7.5z"/>
    </SvgIcon>
  );
};
