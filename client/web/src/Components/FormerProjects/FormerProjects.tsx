import React from 'react';
import { Box } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import useStyles from './style';

const FormerProject = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Swiper
        breakpoints={{
          490: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={45}
        slidesPerView={3}
        className="container"
      >
        <SwiperSlide>
          <Box className="box">
            <Box component="span" className="badge">
              Innovation
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="box">
            <Box component="span" className="badge">
              Interface design
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="box">
            <Box component="span" className="badge">
              Innovation
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="box">
            <Box component="span" className="badge">
              Innovation
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default FormerProject;
