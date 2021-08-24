import React from 'react';
import { Box, Button } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import useStyles from './style';

const FormerProject = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Swiper
        spaceBetween={45}
        slidesPerView={3}
        className="container"
        breakpoints={{
          320: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          575: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4.75,
            spaceBetween: 10,
          },
          960: {
            slidesPerView: 5.75,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6.75,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 7.75,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <Box className="box">
            <Box className="badge">
              <Button className="btn_badge btn_innovation" variant="contained" type="button">
                Innovation
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="box">
            <Box className="badge">
              <Button className="btn_badge btn_interfaceDesign" variant="contained" type="button">
                Interface design
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="box">
            <Box className="badge">
              <Button className="btn_badge btn_innovation" variant="contained" type="button">
                Innovation
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="box">
            <Box className="badge">
              <Button className="btn_badge btn_innovation" variant="contained" type="button">
                Innovation
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="box">
            <Box className="badge">
              <Button className="btn_badge btn_innovation" variant="contained" type="button">
                Innovation
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default FormerProject;
