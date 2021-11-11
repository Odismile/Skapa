import React, { FC } from 'react';
import { Box, makeStyles, Tab, Tabs } from '@material-ui/core';
import useStyles from './styles';
import PrimaryHeader from '../../Components/Header/Header';
import ProjectContent from '../ProjectContent/ProjectContent';
import Talents from '../Talents/Talents';
import Places from '../Places/Places';

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
        padding: '20px 0px',
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
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

interface TabLabelWishList {
  nom: string;
  total: number;
}
const TabLabelWishlist: FC<TabLabelWishList> = (props) => {
  const stl = makeStyles({
    content: {
      display: 'flex',
      alignItems: 'center',
      padding: '0px 10px',
      '& .number': {
        height: 20,
        width: 20,
        backgroundColor: '#EEEEEE',
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
};

const Wishlist = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.root}>
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
            label={<TabLabelWishlist nom="Projects" total={6} />}
            {...a11yProps(0)}
          />
          <Tab
            classes={{ selected: classes.tabSelected, textColorInherit: classes.label, root: classes.tab }}
            label={<TabLabelWishlist nom="Talents" total={10} />}
            {...a11yProps(1)}
          />
          <Tab
            classes={{ selected: classes.tabSelected, textColorInherit: classes.label, root: classes.tab }}
            label={<TabLabelWishlist nom="Places" total={4} />}
            {...a11yProps(2)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ProjectContent />
          {/* If empty */}
          {/* <Box className='empty-wishlist'>
            Aucun projets dans wishlist
          </Box> */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Talents />
          {/* If empty */}
          {/* <Box className='empty-wishlist'>
            Aucun talents dans wishlist
          </Box> */}
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Places />
          {/* If empty */}
          {/* <Box className='empty-wishlist'>
            Aucun places dans wishlist
          </Box> */}
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Wishlist;
