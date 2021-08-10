import { TextField } from "@material-ui/core";
import { FC } from "react";
import useStyles from "./style";

interface TextFiedlProps{
    label: string,
    type: string,
    id: string,
}
const TextFieldComponent:FC<TextFiedlProps> = (props) =>{
    const classes = useStyles();
    return(
        <TextField
        id={props.id}
        label={props.label}
        type={props.type}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.textfield}
      />
    )

}

export default TextFieldComponent;