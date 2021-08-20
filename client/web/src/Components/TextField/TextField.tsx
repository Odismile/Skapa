import React from 'react';
import { TextField, InputAdornment, TextFieldProps } from '@material-ui/core';
import { FC } from 'react';
import useStyles from './style';

interface TextFieldCustomProps {
  value?: any;
  error?: boolean;
  helperText?: string;
  name?: string | undefined;
  placeholder?: string;
  icons?: any;

  // variant:string,
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
}

const TextFieldComponent: FC<TextFieldCustomProps & TextFieldProps> = (props) => {
  const classes = useStyles();
  return (
    <TextField
      name={props.name}
      onChange={props.onChange}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" className="append_input">
            {props.icons}
          </InputAdornment>
        ),
      }}
      placeholder={props.placeholder}
      value={props.value}
      error={props.error}
      helperText={props.helperText}
      className={classes.textfield}
      {...props}
    />
  );
};

export default TextFieldComponent;
