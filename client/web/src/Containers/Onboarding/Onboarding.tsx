import { Box, Typography } from '@material-ui/core';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import mainLogo from '../../Assets/images/logo.svg';
import photoTuto_01 from '../../Assets/images/photo-tuto-01.svg';
import photoTuto_02 from '../../Assets/images/photo-tuto-02.svg';
import photoTuto_03 from '../../Assets/images/photo-tuto-03.svg';
import useStyles from './styles';

// install Swiper modules
SwiperCore.use([Pagination]);

const Onboarding = () => {
  const classes = useStyles();
  const [endPage, setEndPage] = useState(false);
  const paramsSlider = {
    Navigation: false,
    pagination: {
      clickable: true,
    },
    onActiveIndexChange: (e: SwiperCore) => {
      e.activeIndex === 2 ? setEndPage(true) : setEndPage(false);
    },
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerRow: 1,
    slidesPerView: 1,
  };
  const datas = [
    {
      nameSrc: photoTuto_01,
      altSrc: 'photoTuto 01',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      nameSrc: photoTuto_02,
      altSrc: 'photoTuto 02',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      nameSrc: photoTuto_03,
      altSrc: 'photoTuto 03',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  return (
    <Box className={classNames(classes.mainPage)}>
      <Box className="wrapPage">
        <Box component="header" className={classNames(classes.main_header)}>
          <figure className="logo">
            <img src={mainLogo} alt="logo" />
          </figure>
        </Box>
        <Box className={classNames(classes.mainContainer)}>
          {/* Slider */}
          <Box className={classes.sliderTuto}>
            <Swiper {...paramsSlider} className="tuto_slider">
              {datas.map((data, index) => (
                <SwiperSlide key={index}>
                  <figure className="tuto_img">
                    <img src={data.nameSrc} alt={data.altSrc} />
                  </figure>
                  <Box className="tuto_text">
                    <Typography variant="body1">{data.data}</Typography>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
        <Box component="footer" className={classes.footerPage}>
          <Typography className="link-footer">
            {!endPage ? <Link to="/">Skip tutorial</Link> : <Link to="/onboarding-start">Next</Link>}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Onboarding;
