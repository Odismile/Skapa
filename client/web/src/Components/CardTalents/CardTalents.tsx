import { Box, Button, Card, CardContent, Chip, IconButton, Typography } from '@material-ui/core';
import React, { FC, useState, MouseEventHandler } from 'react';
import { useHistory } from 'react-router-dom';
import organisationImg from '../../Assets/images/organisation.png';
import { coachs_profiles_profile_skills } from '../../GraphQL/profiles/types/coachs';
import { useCreateFavoritTalent } from '../../Providers/TalentProvider/useCreateFavoritTalent';
import { useDeleteFavoriTalent } from '../../Providers/TalentProvider/usedeleteFavoriTalent';
import { useCurrentUser } from '../../Providers/UserProvider/hooks/useCurrentUser';
//import CardProject from '../CardProjects/CardProjects';
import DrawerAddToProject from '../DrawerAddToProject/DrawerAddToProject';
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
  const [open, setOpen] = useState(false);

  const { isReader, profilId: profilIdLocal, profil } = useCurrentUser();
  const [check, setCheck] = useState(
    profil?.talent_favorits?.some((profile) => profile?.talent_id && talentId && +profile.talent_id === +talentId),
  );

  const { doCreateFavoriteTalent } = useCreateFavoritTalent();
  const { doDeleteTalentFavorit } = useDeleteFavoriTalent();

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const goToDetailsTalents: MouseEventHandler = (event) => {
    event.stopPropagation();
    if (isReader) return;
    history.push(`/details-talents/${talentId}`);
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    if (isReader) return;
    const newChecked = !check;
    setCheck(newChecked);

    if (newChecked) {
      doCreateFavoriteTalent({
        variables: { input: { data: { talent_id: talentId ?? '', profile: profilIdLocal } } },
      });
    } else {
      if (profilIdLocal && talentId)
        doDeleteTalentFavorit({
          variables: {
            profileId: +profilIdLocal,
            talentId: +talentId,
          },
        });
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent className="content" onClick={goToDetailsTalents}>
        <Box className="head">
          <figure className="userPhoto">
            <img src={coachPhoto} alt="photo_user" />
            <img src={organisationImg} className="iconOrganisation" alt="organisation" />
          </figure>
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
              <span>{coachName}</span>
              <span>{coachAddress ? ` - ${coachAddress}` : ``}</span>
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
          <Button
            className="btnAdd"
            disabled={isReader}
            onClick={(e) => {
              e.stopPropagation();
              handleDrawer();
            }}
          >
            Add to a project
          </Button>

          {/* Si checkbox */}
          {/* <Box className={classes.check}>
              <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="checkbox"/>
            </Box> */}
        </Box>
      </CardContent>
      {talentId && (
        <DrawerAddToProject
          talentId={talentId}
          talentName={coachName ?? ''}
          isOpen={open}
          handleOpen={handleDrawer}
          handleClose={handleDrawer}
        />
      )}
    </Card>
  );
};

export default CardTalents;
