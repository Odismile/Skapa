import { Box, Slider, Typography } from '@material-ui/core';
import useStyles from './styles';
import { filterTalentVar } from '../../ReactiveVariable/Coach/coach';
import { useReactiveVar } from '@apollo/client';

const DailyRate = () => {
  const classes = useStyles();
  const filterTalent = useReactiveVar(filterTalentVar);
  return (
    <Box className={classes.root}>
      <Typography className="money">
        {filterTalent.minDailyRate}£ - {filterTalent.maxDailyRate}£
      </Typography>
      <Typography className="text">
        The average rate is {(filterTalent.minDailyRate + filterTalent.maxDailyRate / 2).toFixed(2)}£
      </Typography>
      <Slider
        orientation="horizontal"
        defaultValue={[filterTalent.minDailyRate, filterTalent.maxDailyRate]}
        aria-labelledby="vertical-slider"
        valueLabelDisplay="on"
        min={0}
        max={1000}
        onChange={(e, newValue) => {
          const value = newValue as number[];
          e.preventDefault();
          filterTalentVar({
            ...filterTalent,
            maxDailyRate: value[1],
            minDailyRate: value[0],
          });
        }}
        classes={{ valueLabel: classes.label }}
      />
    </Box>
  );
};

export default DailyRate;
