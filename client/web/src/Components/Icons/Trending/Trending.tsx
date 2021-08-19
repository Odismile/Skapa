/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 14 8" >
      <g>
      <path d="M13 0L7.38636 5.54167L4.43182 2.625L0 7" id="Path" fill="none" fill-rule="evenodd" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M0 0L4 0L4 4" transform="translate(9 0)" id="Path" fill="none" fill-rule="evenodd" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </SvgIcon>
  );
};
