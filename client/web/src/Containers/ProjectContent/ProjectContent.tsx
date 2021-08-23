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
import { useLocation } from 'react-router-dom';
import photoUser from '../../Assets/images/photo-card.png';
import CardReview from '../../Components/CardReview/CardReview';
import HeartLine from '../../Components/Icons/HeartLine';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import TextFieldComponent from '../../Components/TextField/TextField';
import { projects_all_projects } from '../../GraphQL/project/types/projects_all';
import { useCreateContribution } from '../../Providers/ContributionProvider/Hooks/useCreateContribution';
import { useGetProjectAll } from '../../Providers/ProjectProvider/useGetProjectAll';
import { useCurrentUser } from '../../Providers/UserProvider/hooks/useCurrentUser';
import { projectSkills, projectSortedBy } from '../../ReactiveVariable/Project/projectSkills';
import { WISHLIST } from '../../Routes';
import useStyles from './styles';

const ProjectContent = () => {
  const classes = useStyles();

  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { data, loading } = useGetProjectAll();
  const { isReader, profilId } = useCurrentUser();

  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState<(projects_all_projects | null)[] | null | undefined>();
  const [project, setProject] = useState<projects_all_projects | null>(null);
  const [priceToContribute, setPriceToContribute] = useState<number | null>(null);
  const { doCreateContribution } = useCreateContribution();

  const isInWishList = [WISHLIST].includes(pathname);

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
    let newProjects: (projects_all_projects | null)[] | null | undefined = [];
    if (projectSortedByLocal === 'Latest') {
      newProjects = orderBy(projects, ['created_at'], ['desc']);
    } else if (projectSortedByLocal === 'Oldest') {
      newProjects = orderBy(projects, ['created_at'], ['asc']);
    } else if (projectSortedByLocal === 'Trending Up') {
    } else if (projectSortedByLocal === 'Expires Soon') {
      newProjects = orderBy(projects, ['Date_End'], ['desc']);
    }
    if (newProjects.length !== projects?.length) setProjects(newProjects);
  }, [projectSortedByLocal]);

  useEffect(() => {
    if (isInWishList) {
      const newProjects = (projects || []).filter(
        (item) => item?.project_favorits?.length && item?.project_favorits?.some((i) => i?.profile?.id === profilId),
      );
      if (projects?.length !== newProjects.length) setProjects(newProjects);
    }
  }, [isInWishList, profilId, projects]);

  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.value.trim().length === 0) {
      setProjects(data?.projects);
    } else {
      const newProjects = data?.projects?.filter(
        (project) =>
          project?.Name?.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()) ||
          project?.Type?.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()) ||
          project?.profile?.users_id?.lastname?.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()) ||
          project?.profile?.users_id?.surname?.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()),
      );
      setProjects(newProjects);
    }
  };

  const onClickContribute = () => {
    if (priceToContribute !== null && priceToContribute !== 0) {
      doCreateContribution({
        variables: {
          input: {
            data: { profile_id: project?.profile?.id ?? '', project_id: project?.id ?? '', value: priceToContribute },
          },
        },
      }).then((result) => {
        if (result.data?.createContribute?.contribute?.id) {
          //setPriceToContribute(null);
        }
      });
    } else {
    }
  };

  return (
    <Box className={classes.projectPage}>
      <SearchFilter onChangeFitlerText={onChangeFilter} placeholder="Look for one of your favorite"/>
      {loading && <Skeleton count={1} height={170} />}

      {!loading &&
        projects?.length !== 0 &&
        projects?.map((project, index) => {
          return (
            <Box className={classes.content} key={index}>
              <CardReview
                projectId={project?.id}
                profilId={project?.profile?.id}
                name={project?.Name ?? ''}
                imgCardUrl={project?.Picture ?? ''}
                project_favorits={project?.project_favorits}
              />
              <Box className="btnContribute" onClick={() => !isReader && onClicklContribute(project)}>
                <Button onClick={handleDrawer} disabled={isReader}>
                  Contribute
                </Button>
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
            <Button
              variant="contained"
              className="btn_handleDrawer"
              disabled={isReader}
              onClick={handleDrawer}
            ></Button>
            <Typography className="title_text" variant="h2">
              I contribute to the following project{' '}
            </Typography>
            <Button
              color="primary"
              variant="contained"
              href=""
              disabled={isReader}
              className="btn_done"
              onClick={handleDrawer}
            >
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
                <IconButton className="btn-favori" disabled={isReader} onClick={handleClick}>
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
                You have <span className="amount_value">{priceToContribute ? priceToContribute : 0} $</span>in your
                wallet
              </Typography>

              <List className="list_relativeuser">
                <ListItem disableGutters={true}>
                  <figure className="user_avatar">
                    <img src={photoUser} alt="user_photo" />
                  </figure>
                  <Box className="user_infos">
                    <Typography>
                      Your average contribution is :{' '}
                      <span className="price">{priceToContribute ? priceToContribute : 0} $</span>
                    </Typography>
                  </Box>
                </ListItem>
              </List>
              <Button
                color="primary"
                variant="contained"
                href=""
                className="btn_contribute"
                disabled={isReader && priceToContribute === null && priceToContribute === 0}
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
