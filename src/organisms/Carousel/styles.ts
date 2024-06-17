import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  transition: transform 300ms ease-in-out;
  border-radius: 8px; /* Adicionando border-radius */
`;

export const Button = styled.button`
  all: unset;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;

  &:hover,
  &:focus-visible {
    background-color: rgba(0, 0, 0, 0.2);
  }

  & > * {
    stroke: white;
    fill: black;
    width: 2rem;
    height: 2rem;
  }
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.25rem;
`;

export const DotButton = styled.button`
  all: unset;
  display: block;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  transition: transform 100ms ease-in-out;

  &:hover,
  &:focus-visible {
    transform: scale(1.2);
  }

  & > * {
    stroke: white;
    fill: black;
    height: 100%;
    width: 100%;
  }
`;

const squish = keyframes`
  50% {
    transform: scale(1.4, 0.6);
  }
`;

export const SkipLink = styled.a`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  border: 0;
  clip: rect(0, 0, 0, 0);

  &:focus-visible {
    top: 0;
    left: 0;
    border: 1px solid black;
    background-color: white;
    padding: 0.5rem;
    width: auto;
    height: auto;
    margin: 0;
    clip: unset;
    text-decoration: none;
    color: black;
    z-index: 100;
  }
`;

export const ImgSliderImg = styled.img`
  transition: transform 300ms ease-in-out;
`;

export const ImgSliderBtnHover = styled(Button)`
  &:hover > *,
  &:focus-visible > * {
    animation: ${squish} 200ms ease-in-out;
  }
`;
