import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // required
import { Carousel } from 'react-responsive-carousel';
import { Box } from '@mui/material';

const BannerCarousel = () => {
  const images = [
    {
      src: 'https://wsproducts.cloudjiffy.net/elearnkpsuser/file/downloadFile/?filePath=/opt/tomcat/workspace/upload_files/kpscads/8/banner4.png',
      alt: 'Banner 1',
    },
    {
      src: 'https://wsproducts.cloudjiffy.net/elearnkpsuser/file/downloadFile/?filePath=/opt/tomcat/workspace/upload_files/kpscads/9/banner5.png',
      alt: 'Banner 2',
    },
    {
      src: 'https://wsproducts.cloudjiffy.net/elearnkpsuser/file/downloadFile/?filePath=/opt/tomcat/workspace/upload_files/kpscads/7/banner2.png',
      alt: 'Banner 3',
    },
  ];

  return (
    <Box sx={{ maxWidth: '100%', mt: 2 }}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={4000}
        transitionTime={1000}
        swipeable
        emulateTouch
        dynamicHeight={false}
      >
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default BannerCarousel;
