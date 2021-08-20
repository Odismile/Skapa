import React, { FC } from 'react';
import { TextField, InputAdornment, TextFieldProps } from '@material-ui/core';
import classNames from 'classnames';
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
      className={classNames(classes.textfield, "textField_content")}
      {...props}
    />
  );
};

export default TextFieldComponent;
