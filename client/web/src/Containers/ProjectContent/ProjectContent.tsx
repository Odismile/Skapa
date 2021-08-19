import { useReactiveVar } from '@apollo/client/react/hooks/useReactiveVar';
import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
  Typography,
} from '@material-ui/core';
import { orderBy } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import photoUser from '../../Assets/images/photo-card.png';
import CardReview from '../../Components/CardReview/CardReview';
import HeartLine from '../../Components/Icons/HeartLine';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import TextFieldComponent from '../../Components/TextField/TextField';
import { projects_all_projects } from '../../GraphQL/project/types/projects_all';
import { useGetProjectAll } from '../../Providers/ProjectProvider/useGetProjectAll';
import { projectSkills, projectSortedBy } from '../../ReactiveVariable/Project/projectSkills';
import useStyles from './styles';

const ProjectContent = () => {
  const classes = useStyles();

  const { t } = useTranslation();
  const { data, loading } = useGetProjectAll();

  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState<(projects_all_projects | null)[] | null | undefined>();
  const [project, setProject] = useState<projects_all_projects | null>(null);
  const [priceToContribute, setPriceToContribute] = useState<number>(0);

  const projectCategory = useReactiveVar(projectSkills);
  const projectSortedByLocal = useReactiveVar(projectSortedBy);

  const onChangeValuePrice = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPriceToContribute(+event.target.value);
  };

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const handleClick = (event: any) => {
    event.stopPropagation();
  };

  const onClicklContribute = (project: projects_all_projects | null) => {
    setProject(project);
  };

  useEffect(() => {
    if (data?.projects) {
      setProjects(data.projects);
    }
  }, [data?.projects]);

  useEffect(() => {
    if (projectCategory.length !== 0) {
      const newProjects = data?.projects?.filter((project) =>
        projectCategory.find((category) => project?.Type === category),
      );
      setProjects(newProjects);
    } else {
      setProjects(data?.projects);
    }
  }, [projectCategory]);

  useEffect(() => {
    if (projectSortedByLocal === 'Latest') {
      const newProjects = orderBy(projects, ['created_at'], ['desc']);
      setProjects(newProjects);
    } else if (projectSortedByLocal === 'Oldest') {
      const newProjects = orderBy(projects, ['created_at'], ['asc']);
      setProjects(newProjects);
    } else if (projectSortedByLocal === 'Trending Up') {
    } else if (projectSortedByLocal === 'Expires Soon') {
      const newProjects = orderBy(projects, ['Date_End'], ['desc']);
      setProjects(newProjects);
    }
  }, [projectSortedByLocal]);

  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.value.trim().length === 0) {
      setProjects(data?.projects);
    } else {
      const newProjects = data?.projects?.filter(
        (project) =>
          project?.Name?.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()) ||
          project?.Type?.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()),
      );
      setProjects(newProjects);
    }
  };

  const onClickContribute = () => {
    console.log(`project.id`, project?.id);
    console.log(`priceToContribute`, priceToContribute);
    console.log('**********************');
  };

  return (
    <Box className={classes.projectPage}>
      <SearchFilter onChangeFitlerText={onChangeFilter} />
      {loading && <Skeleton count={1} height={170} />}

      {!loading &&
        projects?.length !== 0 &&
        projects?.map((project, index) => {
          return (
            <Box className={classes.content} key={index}>
              <CardReview projectId={project?.id} name={project?.Name ?? ''} imgCardUrl={project?.Picture ?? ''} />
              <Box className="btnContribute" onClick={() => onClicklContribute(project)}>
                <Button onClick={handleDrawer}>Contribute</Button>
              </Box>
            </Box>
          );
        })}

      {!loading && projects?.length === 0 && <Typography>{t(`project.none`)}</Typography>}

      <SwipeableDrawer
        className={classes.drawerContribute}
        anchor="bottom"
        open={open}
        onClose={handleDrawer}
        onOpen={handleDrawer}
        classes={{
          paper: classes.drawerPaperContribute,
        }}
        SwipeAreaProps={{ className: 'backDrop_contribute' }}
      >
        <Box className={classes.contribute_drawerContent}>
          <Box className="header_content" component="header">
            <Button variant="contained" className="btn_handleDrawer" onClick={handleDrawer}></Button>
            <Typography className="title_text" variant="h2">
              I contribute to thefollowing project{' '}
            </Typography>
            <Button color="primary" variant="contained" href="" className="btn_done" onClick={handleDrawer}>
              Done
            </Button>
          </Box>
          <Box className="body_content" component="section">
            <form className="formContribute" id="formContribute">
              <Card className="contribute_media" elevation={0}>
                <CardMedia className="contribute_picture" image={project?.Picture ?? ''} title="image" />
                <Box className="category" component="span">
                  LAB
                </Box>
                <IconButton className="btn-favori" onClick={handleClick}>
                  <HeartLine className="iconHeart" />
                </IconButton>
              </Card>
              <Typography className="subtitle_text" variant="h3">
                {project?.Name}
              </Typography>
              <Typography className="text">
                What amount would you wish to <br />
                give to support this project ?
              </Typography>
              <Box className="field_item amount_item">
                <TextFieldComponent
                  label=""
                  id="amountValue"
                  type="number"
                  value={priceToContribute}
                  placeholder={'0000 $'}
                  onChange={(e) => onChangeValuePrice(e)}
                />
              </Box>
              <Typography className="text_status">
                You have <span className="amount_value">12 000 $</span>in your wallet
              </Typography>

              <List className="list_relativeuser">
                <ListItem disableGutters={true}>
                  <figure className="user_avatar">
                    <img src={photoUser} alt="user_photo" />
                  </figure>
                  <Box className="user_infos">
                    <Typography>
                      Your average contribution is : <span className="price">5 690 $</span>
                    </Typography>
                  </Box>
                </ListItem>
                {/* <ListItem disableGutters={true}>
                  <figure className="user_avatar">
                    <img src={photoUser} alt="user_photo" />
                  </figure>
                  <Box className="user_infos">
                    <Typography>
                      Your average contribution is : <span className="price">5 690 $</span>
                    </Typography>
                  </Box>
                </ListItem> */}
              </List>
              <Button
                color="primary"
                variant="contained"
                href=""
                className="btn_contribute"
                onClick={onClickContribute}
              >
                Contribute
              </Button>
            </form>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default ProjectContent;
