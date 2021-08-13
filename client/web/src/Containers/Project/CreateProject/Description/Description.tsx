import { Box, IconButton, TextareaAutosize, TextField, Typography, FormControl, FormHelperText, Select, MenuItem, InputLabel  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import Info from '../../../../Components/Icons/Info/Info';
import IconPhoto from '../../../../Components/Icons/Photo/Photo';
import TextFieldComponent from '../../../../Components/TextField/TextField';
import { Items_get_language_items } from '../../../../GraphQL/items/types/Items_get_language';
import { useItemsGetSkills } from '../../../../Providers/ItemsProvider/hooks/useItemsGetSkills';
import useStyles from './styles';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Description = () => {
  const classes = useStyles();

  const [age, setAge] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };


  const { data, loading } = useItemsGetSkills();
  const { t } = useTranslation();

  const [skillsSelected, setSkillsSelected] = useState<(Items_get_language_items | null)[] | null | undefined>([]);

  const [fileUpload, setFileUpload] = useState('');
  const [videoUpload, setVideoUpload] = useState('');

  const onClickSkill = (skill: Items_get_language_items | null) => {
    if (skillsSelected?.length === 0) {
      setSkillsSelected([skill]);
    } else {
      const findSkill = skillsSelected?.find((skillItem) => skillItem?.label === skill?.label);
      if (findSkill) {
        const newSkills = skillsSelected?.filter((skillItem) => skillItem?.label !== skill?.label);
        setSkillsSelected(newSkills);
      } else {
        setSkillsSelected((prevState) => prevState && [...prevState, skill]);
      }
    }
  };

  const onUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event?.target?.files?.[0] ? URL.createObjectURL(event?.target?.files?.[0]) : '';
    setFileUpload(url);
  };

  const onUploadVideoFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event?.target?.files?.[0] ? URL.createObjectURL(event?.target?.files?.[0]) : '';
    setVideoUpload(url);
  };

  return (
    <Box className={classes.description}>
      {/* upload picture */}
      <Box className="upload_bloc" key={'1'}>
        <input
          accept="image/*"
          className="upload_picture"
          id="contained-button-file-picture"
          multiple
          type="file"
          onChange={(e) => onUploadFile(e)}
        />
        <label htmlFor="contained-button-file-picture" className="upload_content">
          {fileUpload.length !== 0 ? (
            <img src={fileUpload} className={classes.imageUpload} />
          ) : (
            <>
              <IconPhoto />
              <span>{t(`createProject.uploadAPicture`)}</span>
            </>
          )}
        </label>
      </Box>

      {/* Forms content */}
      <Box className="form_bloc">
        <form className="formDescription">
          <Box className="item_bloc">
            <Box className="title_bloc" component="header">
              <Typography variant="h2">Lorem Ipsum Sit Amet </Typography>
              <IconButton aria-label="edit" className="btn_edit btn_title">
                <EditIcon />
              </IconButton>
              <Typography className="subTitle" variant="h3">
                {t(`createProject.basicInformation`)}
              </Typography>
            </Box>
            <Box className="content_bloc" component="section">
              <Box className="field_item typeProject_item selectBox_item">
                <InputLabel shrink>Type project</InputLabel>
                <Select
                  defaultValue="Type project"
                  fullWidth
                  className="selectBox"
                  IconComponent= {KeyboardArrowDownIcon}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left"
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left"
                    },
                    getContentAnchorEl: null
                  }} >
                    <MenuItem selected >Type project 1</MenuItem>
                    <MenuItem value={1}>Type project 2</MenuItem>
                    <MenuItem value={2}>Type project 3</MenuItem>
                </Select>
              {/* <TextField 
                select 
                fullWidth 
                variant="outlined" 
                Men
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </TextField> */}
              </Box>
              <Box className="field_item">
                <TextFieldComponent
                  label={t(`createProject.city`)}
                  id="VilleProject"
                  placeholder="Ville "
                  type="text"
                />
              </Box>
              <Box className="grid_field">
                <Box className="field_item field_date">
                  <TextField
                    id="dateStarts"
                    label={t(`createProject.starts`)}
                    type="date"
                    defaultValue="12/05/21"
                    className="input_date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
                <Box className="field_item field_date">
                  {/* <DatePicker
                    label="Basic example"
                    value={selectedDate}
                    onChange={handleDateChange}
                    animateYearScrolling
                  /> */}

                  <TextField
                    id="dateEnd"
                    label={t(`createProject.end`)}
                    type="date"
                    defaultValue="12/05/21"
                    className="input_date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="item_bloc">
            <Box className="title_bloc" component="header">
              <Typography variant="h2">{t(`createProject.projectDescription`)}</Typography>
              <IconButton aria-label="info" className="btn_info btn_title">
                <Info />
              </IconButton>
            </Box>
            <Box className="content_bloc" component="section">
              <Box className="field_item textarea_item">
                <TextareaAutosize minRows="8" className="textarea_input" placeholder="Lorem Ipsum" defaultValue="" />
                <Typography className="textLeft">0/240 symbols</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="item_bloc">
            <Box className="title_bloc" component="header">
              <Typography variant="h2">{t(`createProject.skillsRecquired`)}</Typography>
              <IconButton aria-label="info" className="btn_info btn_title">
                <Info />
              </IconButton>
            </Box>
            <Box className="content_bloc skills_bloc" component="section">
              <Box className="selected_skills">
                {skillsSelected?.map((skill, index) => {
                  return (
                    <Box className="inputGroup" key={index}>
                      <input id={skill?.id + 'selected'} name={skill?.label ?? ''} type="checkbox" />
                      <label htmlFor={skill?.id + 'selected'}>{skill?.label ?? ''}</label>
                    </Box>
                  );
                })}
              </Box>
              <Box className="all_skills">
                {loading && (
                  <Box className="inputGroup">
                    <Skeleton count={3} height={25} />
                  </Box>
                )}

                {!loading &&
                  data?.items?.map((skill, index) => {
                    return (
                      <Box className="inputGroup" key={index}>
                        <input
                          id={skill?.id ?? ''}
                          name={skill?.label ?? ''}
                          type="checkbox"
                          onClick={() => onClickSkill(skill)}
                        />
                        <label htmlFor={skill?.id ?? ''}>{skill?.label}</label>
                      </Box>
                    );
                  })}
              </Box>
            </Box>
          </Box>
          <Box className="item_bloc">
            <Box className="title_bloc" component="header">
              <Typography variant="h2">{t(`createProject.videoPitch`)}</Typography>
              <IconButton aria-label="info" className="btn_info btn_title">
                <Info />
              </IconButton>
            </Box>
            <Box className="content_bloc videoPitch_bloc" component="section">
              <Box className="upload_bloc">
                <input
                  accept="video/*"
                  className="upload_picture"
                  id="contained-button-file-video"
                  type="file"
                  onChange={onUploadVideoFile}
                />
                <label htmlFor="contained-button-file-video" className="upload_content">
                  {videoUpload.length !== 0 ? (
                    <ReactPlayer
                      url={videoUpload}
                      className={classes.imageUpload}
                      width={'150px'}
                      height={'100px'}
                      playing={true}
                      controls={true}
                    />
                  ) : (
                    <>
                      <IconPhoto />
                      <span>
                        {t(`createProject.uploadAVideo`)} <br />
                        (youtube, mp4.)
                      </span>
                    </>
                  )}
                </label>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Description;
