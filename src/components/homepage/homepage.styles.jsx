import styled, { css } from "styled-components"

const ContainerStyles = css`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  left: 0;
  right: 0;
  display: flex;

  /* flex-direction: column; */
  /* justify-content: center; */
`

export const HomepageContainer = styled.div`
  flex-direction: column;
  padding: 50px;

  ${ContainerStyles};

  /* Small screens */
  @media (max-width: 1024px) {
    padding: 48px;
  }

  /* Tablets */
  @media (max-width: 768px) {
    padding: 24px;
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
    padding: 12px;
  }
`

export const ContentContainer = styled.div`
  flex-direction: row;
  justify-content: center;

  ${ContainerStyles};

  /* Small screens */
  @media (max-width: 1024px) {
  }

  /* Tablets */
  @media (max-width: 768px) {
    flex-direction: column;
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
    padding-top: 30px;
    align-self: center;
  }
`

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;

  /* Small screens */
  @media (max-width: 1024px) {
  }

  /* Tablets */
  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ImageContainer = styled.img`
  width: 45%;
  height: 45%;

  /* Small screens */
  @media (max-width: 1024px) {
  }

  /* Tablets */
  @media (max-width: 768px) {
    align-self: center;
    width: 50%;
    height: 50%;
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
    width: 70%;
    height: 70%;
  }
`

export const GreetingsText = styled.p`
  margin-bottom: 8px;
  color: #ffffff;
  font-size: 17px;
`

export const NameText = styled.h1`
  color: #fff;
  font-family: sans-serif;
  text-align: left;
  font-size: 40px;
`

export const ProfessionText = styled.h2`
  color: #fbbe5d;
  font-family: sans-serif;
  text-align: left;
  font-size: 22px;
  margin-top: -15px;
`

export const ParagraphText = styled.p`
  color: #f0f0f0;
  font-size: 20px;
  letter-spacing: 0.1px;
  line-height: 1.5;
`
