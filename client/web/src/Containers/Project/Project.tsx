import React from 'react';
import { Box, createStyles, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import useStyles from './styles';
import PrimaryHeader from '../../Components/Header';
import Talents from '../Talents/Talents';
import Places from '../Places/Places';
import ProjectContent from '../ProjectContent/ProjectContent';
import CardSpace from '../../Components/CardSpace/CardSpace';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const styleS = makeStyles({
    content: {
      '& >div': {
        padding: '16px 0px',
      },
    },
  });
  const styles = styleS();

  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={styles.content}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

const Project = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.mainPage}>
      <Box className="wrapPage">
        {/* header component */}
        <PrimaryHeader />
        <Box className={classes.mainContainer}>
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            classes={{ indicator: classes.indicator, root: classes.tabs }}
          >
            <Tab
              classes={{ selected: classes.tabSelected, textColorInherit: classes.label, root: classes.tab }}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              classes={{ selected: classes.tabSelected, textColorInherit: classes.label, root: classes.tab }}
              label="Talents"
              {...a11yProps(1)}
            />
            <Tab
              classes={{ selected: classes.tabSelected, textColorInherit: classes.label, root: classes.tab }}
              label="Places"
              {...a11yProps(2)}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            {/* <ProjectContent /> */}
            <CardSpace/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Talents />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Places />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
