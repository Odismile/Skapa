/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 22.7 22.7">
      <path d="M0.7,22c0.9,0.9,1.8,0.9,2.7,0l0,0l8-8l7.9,7.9c0.9,0.9,1.8,0.9,2.7,0c0.9-0.9,0.9-1.8,0-2.7l0,0
	l-7.9-7.9l7.8-7.8c0.9-0.9,0.9-1.8,0-2.7c-0.9-0.9-1.8-0.9-2.7,0l0,0l-7.8,7.8L3.5,0.7c-0.9-0.9-1.8-0.9-2.7,0
	c-0.9,0.9-0.9,1.8,0,2.7l0,0l7.9,7.9l-8,8C-0.2,20.2-0.2,21.1,0.7,22z"/>
    </SvgIcon>
  );
};
