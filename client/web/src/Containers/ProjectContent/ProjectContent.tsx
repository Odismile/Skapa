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
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
// img
import imgCard from '../../Assets/images/lab.svg';
import photoUser from '../../Assets/images/photo-card.png';
import CardReview from '../../Components/CardReview/CardReview';
import Heart from '../../Components/Icons/Heart';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import TextFieldComponent from '../../Components/TextField/TextField';
import { projects_all_projects } from '../../GraphQL/project/types/projects_all';
import { useGetProjectAll } from '../../Providers/ProjectProvider/useGetProjectAll';
import { projectSkills } from '../../ReactiveVariable/Project/projectSkills';
import useStyles from './styles';

const ProjectContent = () => {
  const classes = useStyles();

  const { t } = useTranslation();
  const { data, loading } = useGetProjectAll();

  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState<(projects_all_projects | null)[] | null | undefined>();

  const projectCategory = useReactiveVar(projectSkills);

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const handleClick = (event: any) => {
    event.stopPropagation();
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
              <Box className="btnContribute">
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
            <Button color="primary" variant="contained" href="" className="btn_done">
              Done
            </Button>
          </Box>
          <Box className="body_content" component="section">
            <form className="formContribute" id="formContribute">
              <Card className="contribute_media" elevation={0}>
                <CardMedia className="contribute_picture" image={imgCard} title="image" />
                <Box className="category" component="span">
                  LAB
                </Box>
                <IconButton className="btn-favori" onClick={handleClick}>
                  <Heart className="iconHeart" />
                </IconButton>
              </Card>
              <Typography className="subtitle_text" variant="h3">
                Kit de composants Miro customisables{' '}
              </Typography>
              <Typography className="text">
                What amount would you wish to <br />
                give to support this project ?
              </Typography>
              <Box className="field_item amount_item">
                <TextFieldComponent label="" id="amountValue" type="text" name="" value="0000 $" />
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
              </List>
              <Button color="primary" variant="contained" href="" className="btn_contribute">
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
