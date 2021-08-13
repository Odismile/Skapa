/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 14 14">
      <g>
        <path d="M7,14c0.6,0,0.9-0.3,0.9-0.9l0,0V7.8h5.2c0.6,0,0.9-0.3,0.9-0.9c0-0.6-0.3-0.9-0.9-0.9l0,0H7.9V0.9
        C7.9,0.3,7.6,0,7,0S6.1,0.3,6.1,0.9l0,0v5.1H0.9C0.3,6.1,0,6.3,0,6.9c0,0.6,0.3,0.9,0.9,0.9l0,0h5.2v5.3C6.1,13.7,6.4,14,7,14z"/>
      </g>
    </SvgIcon>
  );
};
