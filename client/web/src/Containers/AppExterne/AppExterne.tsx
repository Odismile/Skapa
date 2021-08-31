import React, { FC } from 'react';
import { Box, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import PrimaryHeader from '../../Components/Header/Header';

import useStyles from './styles';
import SearchFilterTalents from '../../Components/SearchFilterTalents/SearchFilterTalents';

import UserActivityList from '../../Components/MyActivity/UserActivityList/UserActivityList';
import UserContributorList from '../../Components/MyActivity/UserContributorList/UserContributorList';
import UserCreatorList from '../../Components/MyActivity/UserCreatorList/UserCreatorList';

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
        padding: '16px 0',
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

interface TabLabelActivityProps {
  nom: string;
  total: number;
}
const TabLabelActivity: FC<TabLabelActivityProps> = (props) => {
  const stl = makeStyles({
    content: {
      display: 'flex',
      alignItems: 'center',
      padding: '0px 10px',
      '& .number': {
        height: 20,
        width: 20,
        backgroundColor: '#eee',
        borderRadius: 30,
        marginLeft: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 10,
      },
    },
  });
  const classe = stl();
  return (
    <Box className={classe.content}>
      {props.nom}
      <Box className="number">{props.total}</Box>
    </Box>
  );
}

const AppExterne = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.mainPage}>
      <PrimaryHeader />
      <Box className="wrapPage">
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          classes={{ indicator: classes.indicator, root: classes.tabs }}
        >
          <Tab
            classes={{ selected: classes.tabSelected, textColorInherit: classes.label, root: classes.tab }}
            label={<TabLabelActivity nom="Requets" total={3} />}
            {...a11yProps(0)}
          />
          <Tab
            classes={{ selected: classes.tabSelected, textColorInherit: classes.label, root: classes.tab }}
            label={<TabLabelActivity nom="Ongoing" total={2} />}
            {...a11yProps(1)}
          />
          <Tab
            classes={{ selected: classes.tabSelected, textColorInherit: classes.label, root: classes.tab }}
            label={<TabLabelActivity nom="Previous" total={7} />}
            {...a11yProps(2)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography>Tab 01</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>Tab 02</Typography>
        </TabPanel>
      </Box>
    </Box>
  );
};

export default AppExterne;
