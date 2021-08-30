import { Box, Button, Card, CardMedia, List, ListItem, Drawer, Typography } from '@material-ui/core';
import React, { useMemo, useState } from 'react';
import photoUser from '../../Assets/images/photo-card.png';
import LoadingButton from '../../Components/LoadingButton/LoadingButton';
import TextFieldComponent from '../../Components/TextField/TextField';
import { projects_all_projects } from '../../GraphQL/project/types/projects_all';
import { useCreateContribution } from '../../Providers/ContributionProvider/Hooks/useCreateContribution';
import { useProjectContributionMax } from '../../Providers/ProjectProvider/useProjectContributionMax ';
import { useCurrentUser } from '../../Providers/UserProvider/hooks/useCurrentUser';
import useStyles from './styles';

interface ContributeDrawerProps {
  project: projects_all_projects | null;
  open: boolean;
  setProject: (value: projects_all_projects | null) => void;
  setOpen: (value: boolean) => void;
}
const ContributeDrawer = (props: ContributeDrawerProps) => {
  const { project, setOpen, setProject, open } = props;
  const classes = useStyles();

  const { isReader, profilId, profil, averageContrubution } = useCurrentUser();
  const { amountMax } = useProjectContributionMax();

  const [priceToContribute, setPriceToContribute] = useState<number | null>(null);
  const { doCreateContribution, loading: contributeLoading } = useCreateContribution();

  const restContribution = useMemo(() => {
    return Math.max(
      (amountMax || 0) - (project?.contributes || []).reduce((acc, item) => acc + (item?.value || 0), 0),
      0,
    );
  }, [project, amountMax]);

  const onChangeValuePrice = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (+event.target.value <= restContribution) {
      setPriceToContribute(+event.target.value);
    }
  };
  const handleCloseDrawer = () => {
    setProject(null);
    setPriceToContribute(0);
    handleDrawer();
  };
  const handleDrawer = () => {
    setOpen(!open);
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
          handleCloseDrawer();
        }
      });
    } else {
    }
  };
  return (
    <Drawer
      className={classes.drawerContribute}
      anchor="bottom"
      open={open}
      onClose={handleCloseDrawer}
      //onOpen={handleDrawer}
      classes={{
        paper: classes.drawerPaperContribute,
      }}
      BackdropProps={{ className: 'backDrop_contribute' }}
      //SwipeAreaProps={{ className: 'backDrop_contribute' }}
    >
      <Box className={classes.contribute_drawerContent}>
        <Box className="header_content" component="header">
          <Button variant="contained" className="btn_handleDrawer" disabled={isReader} onClick={handleDrawer}></Button>
          <Typography className="title_text" variant="h2">
            I contribute to the following project{' '}
          </Typography>
          <Button
            color="primary"
            variant="contained"
            href=""
            disabled={isReader}
            className="btn_done"
            onClick={handleCloseDrawer}
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
                InputProps={{ inputProps: { min: 0, max: restContribution } }}
                onChange={(e) => onChangeValuePrice(e)}
              />
            </Box>
            <Typography className="text_status">
              You have <span className="amount_value">{profil?.currentBalance ?? 0} $</span>in your wallet
            </Typography>

            <List className="list_relativeuser">
              <ListItem disableGutters={true}>
                <figure className="user_avatar">
                  <img src={profil?.picture || photoUser} alt="user_photo" />
                </figure>
                <Box className="user_infos">
                  <Typography>
                    Your average contribution is : <span className="price">{averageContrubution} $</span>
                  </Typography>
                </Box>
              </ListItem>
            </List>
            <LoadingButton
              color="primary"
              variant="contained"
              href=""
              isLoading={contributeLoading}
              className="btn_contribute"
              disabled={isReader && priceToContribute === null && priceToContribute === 0}
              onClick={onClickContribute}
            >
              Contribute
            </LoadingButton>
          </form>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ContributeDrawer;
