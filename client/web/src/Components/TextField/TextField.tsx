import React from 'react';
import { TextField } from '@material-ui/core';
import { FC } from 'react';
import useStyles from './style';

interface TextFiedlProps {
  value?: any;
  error?: boolean;
  helperText?: string;
  label: string;
  type: string;
  id: string;
  name?: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
}

const TextFieldComponent: FC<TextFiedlProps> = (props) => {
  const classes = useStyles();
  return (
    <TextField
      name={props.name}
      onChange={props.onChange}
      id={props.id}
      label={props.label}
      type={props.type}
      InputLabelProps={{
        shrink: true,
      }}
      value={props.value}
      error={props.error}
      helperText={props.helperText}
      className={classes.textfield}
    />
  );
};

export default TextFieldComponent;
