import { Box, Slider, Typography } from '@material-ui/core';
import useStyles from './styles';
import { filterCoachVar } from '../../ReactiveVariable/Coach/coach';
import { useReactiveVar } from '@apollo/client';

const DailyRate = () => {
  const classes = useStyles();
  const filterCoach = useReactiveVar(filterCoachVar);
  return (
    <Box className={classes.root}>
      <Typography className="money">
        {filterCoach.minDailyRate}£ - {filterCoach.maxDailyRate}£
      </Typography>
      <Typography className="text">
        The average rate is {(filterCoach.minDailyRate + filterCoach.maxDailyRate / 2).toFixed(2)}£
      </Typography>
      <Slider
        orientation="horizontal"
        defaultValue={[filterCoach.minDailyRate, filterCoach.maxDailyRate]}
        aria-labelledby="vertical-slider"
        valueLabelDisplay="on"
        min={0}
        max={1000}
        onChange={(e, newValue) => {
          const value = newValue as number[];
          e.preventDefault();
          filterCoachVar({
            ...filterCoach,
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
