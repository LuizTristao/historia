import React from 'react';
import Header from '../../organisms/Header';
import FeaturedImage from '../../organisms/FeaturedImage';
import ImageSlider from '../../organisms/Carousel';
import * as S from './styles';

const Frontend: React.FC = () => {
  const carouselImages = [
    { url: '/src/assets/1.png', alt: 'Image 1' },
    { url: '/src/assets/2.jpg', alt: 'Image 2' },
    { url: '/src/assets/3.png', alt: 'Image 3' },
    { url: '/src/assets/4.jpg', alt: 'Image 4' },
  ];

  return (
    <S.Container>
      <Header />
      <main>
        <FeaturedImage />
        <ImageSlider images={carouselImages} />
      </main>
    </S.Container>
  );
};

export default Frontend;
