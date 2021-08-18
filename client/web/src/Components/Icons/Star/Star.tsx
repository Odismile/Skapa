/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <g>
        <path
          d="M8 0L10.472 5.008L16 5.816L12 9.712L12.944 15.216L8 12.616L3.056 15.216L4 9.712L0 5.816L5.528 5.008L8 0L8 0Z"
          id="Path"
          fill="#8870FF"
          fill-rule="evenodd"
          stroke="none"
        />
      </g>
    </SvgIcon>
  );
};
