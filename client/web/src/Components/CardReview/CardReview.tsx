import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Slider,
  Typography,
  withStyles,
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import React, { FC, useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import { differenceInDays } from 'date-fns';
import {
  projects_all_projects,
  projects_all_projects_profile_users_id,
} from '../../GraphQL/project/types/projects_all';
import { useCreateProjectFavori } from '../../Providers/ProjectProvider/useCreateProjectFavori';
import { useDeleteProjectFavori } from '../../Providers/ProjectProvider/useDeleteProjectFavori';
import { useCurrentUser } from '../../Providers/UserProvider/hooks/useCurrentUser';
import { getUserFullName } from '../../Utils/utils';
import Heart from '../Icons/Heart';
import HeartLine from '../Icons/HeartLine';
import Trending from '../Icons/Trending';
import useStyles from './style';

export const maxContribution = 1000;

const PrettoSlider = withStyles({
  root: {
    color: '#9067ff',
    height: 5,
    padding: 0,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
    display: 'none',
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 5,
    borderRadius: 14,
  },
  rail: {
    height: 5,
    borderRadius: 14,
  },
})(Slider);

interface CardReviewProps {
  //data?: projects | undefined;
  projectId?: string;
  profilId?: string;
  imgCardUrl: string;
  name: string;
  type?: string;
  user?: projects_all_projects_profile_users_id | null;
  projectInfo?: projects_all_projects | null;
}

const CardReview: FC<CardReviewProps> = ({ imgCardUrl, name, projectId, profilId, user, type, projectInfo }) => {
  const classes = useStyles();
  const history = useHistory();
  const { isReader, profilId: profilIdLocal, profil } = useCurrentUser();

  const [check, setCheck] = useState(
    profil?.project_favorits?.some((favoris) => projectId && favoris?.project?.id === projectId),
  );

  const { doCreateProjectFavorit } = useCreateProjectFavori();
  const { doDeleteProjectFavorit } = useDeleteProjectFavori();

  const totalContribution = useMemo(() => {
    return (projectInfo?.contributes || []).reduce((acc, item) => acc + (item?.value || 0), 0);
  }, [projectInfo?.contributes]);

  const goToDetailsProjects = (event: any, projectId?: string) => {
    if (projectId) {
      history.push(`/project/${projectId}/profil/${profilId}`);
    }
    event.stopPropagation();
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    const newCheck = !check;
    setCheck(newCheck);
    if (newCheck) {
      doCreateProjectFavorit({
        variables: {
          input: { data: { profile: profilIdLocal ?? '', project: projectId ?? '', status: '2' } },
        },
      });
    } else {
      if (profilIdLocal && +profilIdLocal && projectId && +projectId) {
        doDeleteProjectFavorit({
          variables: { profileId: +profilIdLocal, projectId: +projectId },
        });
      }
    }
  };
  return (
    <Card className={classes.root} onClick={(event) => !isReader && goToDetailsProjects(event, projectId)}>
      <CardMedia className={classes.media} image={imgCardUrl} title="image" />
      <CardContent className={classes.content}>
        <Box className="detail-top">
          <Typography className="title" component="p">
            {name}
          </Typography>
          <Typography component="p" className="trending">
            <Trending /> TRENDING UP
          </Typography>
        </Box>
        <Box className="details">
          <Typography component="p" className="name-adress">
            <span>Founder : {getUserFullName(user as any)}</span>
            {/* <span>Founder : {getUserFullName(user as any)}</span> - Lorem - Paris */}
          </Typography>
          <Box className="teams">
            <Typography component="p" className="name-adress">
              <span>Team</span>
            </Typography>
            <AvatarGroup max={3} className="avatarGroup">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
          </Box>
        </Box>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={totalContribution}
          max={maxContribution}
        />
        <Box className="info">
          <Box>
            <Typography component="p" className="active bold">
              {/* 11 734 $ */}
              {`${totalContribution} $`}
            </Typography>
            {/* if on create-project/Reviews, add this */}
            {/* <Typography component="p" className="active">
              Your expenses are 78 000 $
            </Typography> */}
          </Box>
          <Box>
            <Typography component="p" className="bold">
              {projectInfo?.contributes?.length || 0}
            </Typography>
            <Typography component="p">contributors</Typography>
          </Box>
          <Box>
            <Typography component="p" className="bold">
              {differenceInDays(new Date(projectInfo?.Date_end), new Date())}
            </Typography>
            <Typography component="p">days left</Typography>
          </Box>
        </Box>
      </CardContent>
      <Box className="category">{type}</Box>

      <IconButton className="btn-favori" disabled={isReader} onClick={handleClick}>
        {check ? <Heart className="iconHeart" /> : <HeartLine className="iconHeartOutlined" />}
      </IconButton>

      <Box className="bgBlack"></Box>
    </Card>
  );
};

export default CardReview;
