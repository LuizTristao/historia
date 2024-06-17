import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem; /* Aumentar o espaço entre o FeaturedImage e o Slider */
  margin-top: 3rem; /* Espaço maior entre o FeaturedImage e o Header */
  position: relative;
`;

export const Title = styled.h2`
  width: 100%;
  text-align: left; /* Justificar à esquerda */
  font-size: 1.5rem;
  margin-bottom: 1rem; /* Espaço entre o título e a imagem */
  color: #333;
  padding-left: 1rem; /* Adicionar algum padding para espaçamento */
`;

export const UploadButton = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px; /* Tamanho reduzido do botão */
  height: 20px; /* Tamanho reduzido do botão */
  background-color: transparent; /* Removendo fundo cinza */
  border-radius: 50%;
  font-size: 0.75rem; /* Tamanho reduzido da fonte */
  color: black; /* Alterando a cor do texto para preto */
  position: absolute;
  right: 1rem;
  top: 1rem;

  svg {
    width: 12px; /* Tamanho reduzido do ícone */
    height: 12px; /* Tamanho reduzido do ícone */
    color: black; /* Definindo a cor do ícone como preto */
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 1000px; /* Aumentar a largura máxima */
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 1rem; /* Adicionando espaçamento na parte superior */
  margin-bottom: 0; /* Garantindo que não há margem inferior */
  background-color: transparent; /* Garantindo que não há cor de fundo */
`;

export const ImageWrapper = styled.div<{ isEditing: boolean }>`
  width: 100%;
  height: auto;
  border-radius: 8px;
  ${({ isEditing }) =>
    isEditing &&
    css`
      opacity: 0.5;
    `}
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const DescriptionInput = styled.input`
  border: none;
  background: white; /* Fundo branco */
  color: black; /* Letras pretas */
  font-size: 1.5rem;
  text-align: center;
  border-bottom: 1px solid black;
  outline: none;
  padding: 0.5rem; /* Adicionando padding para melhor visibilidade */
  border-radius: 8px; /* Adicionando borda arredondada */
`;

export const Input = styled.input`
  display: none;
`;

export const Description = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  text-align: center;
  color: #333;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem; /* Espaço entre FeaturedImage e ImageSlider */
  margin-top: 2rem; /* Espaço extra na parte superior */
  margin-bottom: 2rem; /* Espaço extra na parte inferior */
`;
