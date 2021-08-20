import { Box, Button, Card, CardContent, Chip, IconButton, SwipeableDrawer, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import organisationImg from '../../Assets/images/organisation.png';
import { coachs_profiles_profile_skills } from '../../GraphQL/profiles/types/coachs';
import { useCreateFavoritTalent } from '../../Providers/TalentProvider/useCreateFavoritTalent';
import { useDeleteFavoriTalent } from '../../Providers/TalentProvider/usedeleteFavoriTalent';
import CardProject from '../CardProjects/CardProjects';
import Award from '../Icons/Award';
import Heart from '../Icons/Heart';
import HeartLine from '../Icons/HeartLine';
import useStyles from './style';

interface CardTalentsProps {
  profilId?: string;
  talentId?: string;
  coachPhoto?: string;
  iconJob?: string;
  jobTitle?: string;
  coachName?: string;
  coachAddress?: string;
  coachLevel?: string;
  coachFee?: number;
  skills?: (coachs_profiles_profile_skills | null)[] | null | undefined;
}

const CardTalents: FC<CardTalentsProps> = ({
  coachAddress,
  coachFee,
  coachLevel,
  coachName,
  coachPhoto,
  iconJob,
  jobTitle,
  skills,
  profilId,
  talentId,
}) => {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [check, setCheck] = React.useState(false);

  const { doCreateFavoriteTalent } = useCreateFavoritTalent();
  const { doDeleteTalentFavorit } = useDeleteFavoriTalent();

  const handleDrawer = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOpen((prev) => !prev);
    // event.stopPropagation();
  };

  const goToDetailsTalents = (event: any) => {
    history.push('/details-talents');
    event.stopPropagation();
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    const newChecked = !check;
    setCheck(newChecked);

    if (newChecked) {
      doCreateFavoriteTalent({
        variables: { input: { data: { talent_id: talentId ?? '' } } },
      });
    } else {
      doDeleteTalentFavorit({ variables: { input: { where: { id: talentId ?? '' } } } });
    }
  };

  return (
    <Card className={classes.root} onClick={goToDetailsTalents}>
      <CardContent className="content">
        <Box className="head">
          <img src={coachPhoto} alt="photo" />
          <Box>
            <Box component="h6" className="head-title">
              {jobTitle}
            </Box>
            {/* recommended */}
            <Typography component="p" className="note recommanded">
              <Award /> RECOMMANDED
            </Typography>
            {/* top rated */}
            {/* <Typography component="p" className="note top-rated">
               <Award /> TOP RATED
              </Typography> */}
            <Typography component="p" className="name-adress">
              <span>{coachName}</span> - {coachAddress}
            </Typography>
            <Typography component="p" className="name-adress">
              <span>Level : </span>
              {coachLevel} <span>Rate : </span>
              {coachFee} $ / day
            </Typography>
          </Box>
          <IconButton className="btn btn-favori" onClick={handleClick}>
            {!check ? <HeartLine className="iconHeartOutlined" /> : <Heart className="iconHeart" />}
          </IconButton>

          <img src={organisationImg} className="iconOrganisation" alt="organisation" />
        </Box>
        <Box className="foot">
          <Box className="tags">
            {skills?.map((skill, index) => {
              if (index < 2) {
                return <Chip key={index} label={skill?.skill_id?.label} />;
              }
            })}

            {skills && skills?.length > 2 && <span className="number">+{skills?.length - 2}</span>}
          </Box>
          {/* si bouton */}
          <Button className="btnAdd" onClick={(e) => handleDrawer(e)}>
            Add to a project
          </Button>

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
            <Box className={classes.addProject_drawerContent}>
              <Box className="header">
                <Button variant="contained" className="btn_handleDrawer" onClick={handleDrawer}></Button>
                <Typography variant="h6">You want to hire Emma ?</Typography>
                <Button className="btn_done" onClick={handleDrawer}>
                  Done
                </Button>
              </Box>
              <Box className="content">
                <Typography variant="h6" className="selectText">
                  Select from your projects
                </Typography>
                <Box>
                  <CardProject />
                </Box>
                <Box>
                  <CardProject />
                </Box>
              </Box>
            </Box>
          </SwipeableDrawer>
          {/* Si checkbox */}
          {/* <Box className={classes.check}>
              <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="checkbox"/>
            </Box> */}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardTalents;
