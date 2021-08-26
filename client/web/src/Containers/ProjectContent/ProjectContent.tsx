import { useReactiveVar } from '@apollo/client/react/hooks/useReactiveVar';
import { Box, Button, Card, CardMedia, List, ListItem, Drawer, Typography } from '@material-ui/core';
import { orderBy } from 'lodash';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import { useLocation } from 'react-router-dom';
import photoUser from '../../Assets/images/photo-card.png';
import CardReview from '../../Components/CardReview/CardReview';
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
  const { isReader, profilId, profil } = useCurrentUser();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<string>('');
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

  const projects = useMemo(() => {
    let newProjects: (projects_all_projects | null)[] | null | undefined = data?.projects;
    if (projectCategory.length !== 0) {
      newProjects = data?.projects?.filter((project) => projectCategory.find((category) => project?.Type === category));
    }

    if (projectSortedByLocal === 'Latest') {
      newProjects = orderBy(newProjects, ['created_at'], ['desc']);
    } else if (projectSortedByLocal === 'Oldest') {
      newProjects = orderBy(newProjects, ['created_at'], ['asc']);
    } else if (projectSortedByLocal === 'Trending Up') {
    } else if (projectSortedByLocal === 'Expires Soon') {
      newProjects = orderBy(newProjects, ['Date_End'], ['desc']);
    }

    if (isInWishList) {
      newProjects = (newProjects || []).filter(
        (item) =>
          item?.id &&
          profil?.project_favorits?.length &&
          profil?.project_favorits?.some((favoris) => favoris?.project?.id === item?.id),
      );
    }

    if (search.length) {
      newProjects = newProjects?.filter(
        (project) =>
          project?.Name?.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
          project?.Type?.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
          project?.profile?.users_id?.lastname?.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
          project?.profile?.users_id?.surname?.trim().toLowerCase().includes(search.trim().toLowerCase()),
      );
    }
    return newProjects;
  }, [data?.projects, projectCategory, projectSortedByLocal, isInWishList, profil?.project_favorits, search]);
  const onClicklContribute = (project: projects_all_projects | null) => {
    setProject(project);
  };

  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(e.target.value.trim());
  };

  const onClickContribute = () => {
    if (priceToContribute !== null && priceToContribute !== 0) {
      doCreateContribution({
        variables: {
          input: {
            data: { profile_id: profilId ?? '', project_id: project?.id ?? '', value: priceToContribute },
          },
        },
      }).then((result) => {
        if (result.data?.createContribute?.contribute?.id) {
          setPriceToContribute(0);
          handleDrawer();
        }
      });
    } else {
    }
  };

  return (
    <Box className={classes.projectPage}>
      <SearchFilter onChangeFitlerText={onChangeFilter} placeholder="Look for one of your favorite" />
      {loading && <Skeleton count={1} height={170} />}

      {!loading &&
        projects?.length !== 0 &&
        projects?.map((project, index) => {
          const isAlreadyContributor = project?.contributes?.some((c) => profilId && c?.profile_id?.id === profilId);
          return (
            <Box className={classes.content} key={index}>
              <CardReview
                projectId={project?.id}
                profilId={project?.profile?.id}
                name={project?.Name ?? ''}
                imgCardUrl={project?.Picture ?? ''}
                user={project?.profile?.users_id}
                type={project?.Type ?? ''}
                projectInfo={project}
              />
              <Box className="btnContribute" onClick={() => !isReader && onClicklContribute(project)}>
                <Button onClick={handleDrawer} disabled={isReader || isAlreadyContributor}>
                  Contribute
                </Button>
              </Box>
            </Box>
          );
        })}

      {!loading && projects?.length === 0 && <Typography>{t(`project.none`)}</Typography>}

      <Drawer
        className={classes.drawerContribute}
        anchor="bottom"
        open={open}
        onClose={handleDrawer}
        //onOpen={handleDrawer}
        classes={{
          paper: classes.drawerPaperContribute,
        }}
        BackdropProps={{ className: 'backDrop_contribute' }}
        //SwipeAreaProps={{ className: 'backDrop_contribute' }}
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
      </Drawer>
    </Box>
  );
};

export default ProjectContent;
