import { useReactiveVar } from '@apollo/client/react/hooks/useReactiveVar';
import { Box, Button, Typography } from '@material-ui/core';
import { orderBy } from 'lodash';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import { useLocation } from 'react-router-dom';
import CardReview from '../../Components/CardReview/CardReview';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import { projects_all_projects } from '../../GraphQL/project/types/projects_all';
import { useGetProjectAll } from '../../Providers/ProjectProvider/useGetProjectAll';
import { useCurrentUser } from '../../Providers/UserProvider/hooks/useCurrentUser';
import { projectSkills, projectSortedBy } from '../../ReactiveVariable/Project/projectSkills';
import { WISHLIST } from '../../Routes';
import ContributeDrawer from './ContributeDrawer';
import useStyles from './styles';

const ProjectContent = () => {
  const classes = useStyles();

  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { data, loading } = useGetProjectAll();
  const { isReader, profil } = useCurrentUser();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<string>('');
  const [project, setProject] = useState<projects_all_projects | null>(null);

  const isInWishList = [WISHLIST].includes(pathname);

  const projectCategory = useReactiveVar(projectSkills);
  const projectSortedByLocal = useReactiveVar(projectSortedBy);

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

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const onClicklContribute = (project: projects_all_projects | null) => {
    setProject(project);
  };

  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(e.target.value.trim());
  };

  return (
    <Box className={classes.projectPage}>
      <SearchFilter onChangeFitlerText={onChangeFilter} placeholder="Look for one of your favorite" />
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
                user={project?.profile?.users_id}
                type={project?.Type ?? ''}
                projectInfo={project}
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

      <ContributeDrawer project={project} setProject={setProject} setOpen={setOpen} open={open} />
    </Box>
  );
};

export default ProjectContent;
