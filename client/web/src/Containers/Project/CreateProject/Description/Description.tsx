import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';

import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import Info from '../../../../Components/Icons/Info/Info';
import IconPhoto from '../../../../Components/Icons/Photo/Photo';
import TextFieldComponent from '../../../../Components/TextField/TextField';
import { Items_get_language_items } from '../../../../GraphQL/items/types/Items_get_language';
import { useItemsGetSkills } from '../../../../Providers/ItemsProvider/hooks/useItemsGetSkills';
import { useItemsProjectTypes } from '../../../../Providers/ItemsProvider/hooks/useItemsProjectTypes';
import {
  cityVariable,
  dateEndVariable,
  dateStartVariable,
  filesPictureVariable,
  filesVideoVariable,
  nameProjectVariable,
  projectDescriptionVariable,
  skillsSelectedVariable,
  testCreateObject,
  typeProjectVariable,
} from '../../../../ReactiveVariable/Project/createProject';
import { useUploadFile } from '../../../../Utils/uploadFile';
import useStyles from './styles';

const Description = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const { uploadFile } = useUploadFile();
  const { data, loading } = useItemsGetSkills();
  const { data: dataProjectType } = useItemsProjectTypes();

  const [nameOfProject, setNameOfProject] = useState('');
  const [fileUpload, setFileUpload] = useState('');
  const [typeProject, setTypeProject] = useState('');
  const [city, setCity] = useState('');
  const [dateStart, setdateStart] = useState<Date | null>();
  const [dateEnd, setDateEnd] = useState<Date | null>();
  const [projectDescription, setProjectDescription] = useState('');
  const [skillsSelected, setSkillsSelected] = useState<(Items_get_language_items | null)[] | null | undefined>([]);

  const [videoUpload, setVideoUpload] = useState('');

  const onChageNameOfProject = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNameOfProject(e.target.value);
    nameProjectVariable(e.target.value);
  };

  const onUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event?.target?.files?.[0] ? URL.createObjectURL(event?.target?.files?.[0]) : '';
    const filesConcat = Array.from(event.target.files || []);
    filesPictureVariable(filesConcat);
    setFileUpload(url);
    testCreateObject();
  };

  const onChangeProjectType = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
  ) => {
    setTypeProject('' + e.target.value);
    typeProjectVariable('' + e.target.value);
    testCreateObject();
  };

  const onChangeCity = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCity(e.target.value);
    cityVariable(e.target.value);
    testCreateObject();
  };

  const onChangeDateStart = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setdateStart(moment(e.target.value).toDate());
    dateStartVariable(moment(e.target.value).toDate());
    testCreateObject();
  };

  const onChangeDateEnd = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setDateEnd(moment(e.target.value).toDate());
    dateEndVariable(moment(e.target.value).toDate());
    testCreateObject();
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProjectDescription(e.target.value);
    projectDescriptionVariable(e.target.value);
    testCreateObject();
  };

  const onClickSkill = (skill: Items_get_language_items | null) => {
    if (skillsSelected?.length === 0) {
      setSkillsSelected([skill]);
      skillsSelectedVariable([skill]);
    } else {
      const findSkill = skillsSelected?.find((skillItem) => skillItem?.label === skill?.label);
      if (findSkill) {
        const newSkills = skillsSelected?.filter((skillItem) => skillItem?.label !== skill?.label);
        setSkillsSelected(newSkills);
        skillsSelectedVariable(newSkills);
      } else {
        const newSkills = skillsSelected && [...skillsSelected, skill];
        skillsSelectedVariable(newSkills);
        setSkillsSelected(newSkills);
      }
    }
    testCreateObject();
  };

  const onUploadVideoFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event?.target?.files?.[0] ? URL.createObjectURL(event?.target?.files?.[0]) : '';
    const filesConcat = Array.from(event.target.files || []);
    filesVideoVariable(filesConcat);
    setVideoUpload(url);
    testCreateObject();
  };

  const infoText = `
    Lorem ipsum
    `;

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
            <Box className="title_bloc project_title" component="header">
              <Typography variant="h2" className="nameProject_title">{t(`createProject.nameOfProject`)}</Typography>
              {/* <IconButton aria-label="edit" className="btn_edit btn_title">
                <EditIcon />
              </IconButton> */}
              <TextFieldComponent
                label={''}
                id="nameOfProject"
                placeholder={t(`createProject.nameOfProject`)}
                type="text"
                value={nameOfProject}
                onChange={(e) => onChageNameOfProject(e)}
              />
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
                  onChange={onChangeProjectType}
                  IconComponent={KeyboardArrowDownIcon}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'left',
                    },
                    PaperProps: {
                      className: 'dropDownSelect',
                    },
                    transformOrigin: {
                      vertical: 'top',
                      horizontal: 'left',
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  {dataProjectType?.items?.map((project, index) => {
                    return (
                      <MenuItem key={index} value={project?.label ?? ''}>
                        {project?.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Box>
              <Box className="field_item">
                <TextFieldComponent
                  label={t(`createProject.city`)}
                  id="VilleProject"
                  placeholder={t(`createProject.city`)}
                  type="text"
                  value={city}
                  onChange={(e) => onChangeCity(e)}
                />
              </Box>
              <Box className="grid_field">
                <Box className="field_item field_date">
                  <TextField
                    id="dateStarts"
                    label={t(`createProject.starts`)}
                    type="date"
                    className="input_date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => onChangeDateStart(e)}
                  />
                </Box>
                <Box className="field_item field_date">
                  <TextField
                    id="dateEnd"
                    label={t(`createProject.end`)}
                    type="date"
                    onChange={(e) => onChangeDateEnd(e)}
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
              <Tooltip title={infoText} arrow>
              <IconButton aria-label="info" className="btn_info btn_title">
                <Info />
              </IconButton>
              </Tooltip>
            </Box>
            <Box className="content_bloc" component="section">
              <Box className="field_item textarea_item">
                <TextareaAutosize
                  minRows="8"
                  className="textarea_input"
                  placeholder="Lorem Ipsum"
                  defaultValue=""
                  onChange={onChangeDescription}
                  value={projectDescription}
                  maxLength={240}
                />
                <Typography className="textLeft">{projectDescription.length}/240 symbols</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="item_bloc">
            <Box className="title_bloc" component="header">
              <Typography variant="h2">{t(`createProject.skillsRecquired`)}</Typography>
              <Tooltip title={infoText} arrow>
                <IconButton aria-label="info" className="btn_info btn_title">
                  <Info />
                </IconButton>
              </Tooltip>
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
                <Box className="wrapSkills">
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
          </Box>
          <Box className="item_bloc">
            <Box className="title_bloc" component="header">
              <Typography variant="h2">{t(`createProject.videoPitch`)}</Typography>
              <IconButton aria-label="info" className="btn_info btn_title">
                <Tooltip title={infoText} arrow>
                  <Info />
                </Tooltip>
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
                      className={classes.videoUpload}
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
