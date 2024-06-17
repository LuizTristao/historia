import React, { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react';
import * as S from './styles';

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <S.Section aria-label="Image Slider">
      <S.ImageContainer>
        {images.map(({ url, alt }, index) => (
          <S.Image
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            style={{ transform: `translateX(${-100 * imageIndex}%)` }}
          />
        ))}
      </S.ImageContainer>
      <S.Button onClick={showPrevImage} style={{ left: 0 }} aria-label="View Previous Image">
        <ArrowBigLeft aria-hidden />
      </S.Button>
      <S.Button onClick={showNextImage} style={{ right: 0 }} aria-label="View Next Image">
        <ArrowBigRight aria-hidden />
      </S.Button>
      <S.DotsContainer>
        {images.map((_, index) => (
          <S.DotButton key={index} aria-label={`View Image ${index + 1}`} onClick={() => setImageIndex(index)}>
            {index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
          </S.DotButton>
        ))}
      </S.DotsContainer>
    </S.Section>
  );
};

export default ImageSlider;
