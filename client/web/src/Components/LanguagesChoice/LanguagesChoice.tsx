import { Box, Typography } from '@material-ui/core';
import { FC, useState } from 'react';
import useStyles from './style';

interface TextFiedlProps {
  title: string;
}
const LanguagesChoice: FC<TextFiedlProps> = (props) => {
    const [active, setActive] = useState("active");
    const classes = useStyles();
    return (
        <Box className={classes.boxLang}>
            <Typography className="label">{props.title}</Typography>
            <Box className="choice">
                <Box>Basic</Box>
                <Box>Intermediate</Box>
                <Box>Fluent</Box>
            </Box>
        </Box>
    );
};

export default LanguagesChoice;
