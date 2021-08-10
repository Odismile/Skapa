import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import classNames from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import mainLogo from "../../Assets/images/logo.svg"
import photoTuto_01 from "../../Assets/images/photo-tuto-01.svg"
import photoTuto_02 from "../../Assets/images/photo-tuto-02.svg"
import photoTuto_03 from "../../Assets/images/photo-tuto-03.svg"
import useStyles from "./styles";

// install Swiper modules
SwiperCore.use([Pagination]);

const Onboarding = () => {
  const classes = useStyles();

  const paramsSlider = {
    Navigation: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerRow: 1,
    slidesPerView: 1,
  };


  return (
    <Box className={classNames(classes.root, classes.mainPage)}>
      <Box className="wrapPage">
        <Box component="header" className={classNames(classes.main_header)}>
          <figure className="logo">
            <img src={mainLogo} alt="logo" />
          </figure>
        </Box>
        <Box className={classNames(classes.mainContainer)}>
          {/* Slider */}
          <Box className={classes.sliderTuto}>
            <Swiper  {...paramsSlider} pagination={true} className="tuto_slider">
              <SwiperSlide>
                <figure className="tuto_img">
                  <img src={photoTuto_01} alt="photoTuto 02" />
                </figure>
                <Box className="tuto_text">
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="tuto_img">
                  <img src={photoTuto_02} alt="photoTuto 02" />
                </figure>
                <Box className="tuto_text">
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="tuto_img">
                  <img src={photoTuto_03} alt="photoTuto 03" />
                </figure>
                <Box className="tuto_text">
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </Typography>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
        <Box component="footer" className={classes.footerPage} >
          <a href="#" className="skip">Skip tutorial</a>
        </Box>
      </Box>
    </Box>
  );
};

export default Onboarding;
