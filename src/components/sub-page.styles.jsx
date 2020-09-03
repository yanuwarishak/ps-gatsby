import styled, { css } from "styled-components"

const ContainerStyles = css`
  position: relative;
  left: 0;
  right: 0;
  display: flex;

  width: 100%;
  height: 100%;
  max-width: 1280px;

  margin: 0 auto;
  padding: 48px 72px;
`

export const ContentContainer = styled.div`
  flex-direction: column;

  ${ContainerStyles}

  /* Small screens */
  @media (max-width: 1024px) {
    padding: 48px 48px;
  }

  /* Tablets */
  @media (max-width: 768px) {
    padding: 48px 24px;
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
    padding: 24px 16px;
  }
`

export const RowContentContainer = styled.div`
  flex-direction: row;
  justify-content: center;

  ${ContainerStyles};

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-bottom: 30px;
  }
`

export const ColumnContentContainer = styled.div`
  flex-direction: column;
  align-items: center;

  ${ContainerStyles};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* Small screens */
  @media (max-width: 1024px) {
    /* padding-right: 48px; */
  }

  /* Tablets */
  @media (max-width: 768px) {
    /* padding-right: 24px; */
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
    /* padding-right: 12px; */
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ImageContainer = styled.img`
  /* margin-left: 100px; */
  width: 30%;
  height: 30%;

  @media (max-width: 1024px) {
    width: 50%;
    height: 50%;
    margin: 0px;
    align-self: center;
  }
`

export const GreetingsText = styled.p`
  margin-bottom: 8px;
  color: #ffffff;
  font-size: 17px;
`

export const HeadingText = styled.h1`
  color: #fff;
  font-family: sans-serif;
  text-align: left;
  font-size: 40px;
`

export const SubText = styled.h2`
  color: #fbbe5d;
  font-family: sans-serif;
  text-align: left;
  font-size: 22px;
  margin-top: -15px;
  margin-bottom: 0.45rem;
`

export const ParagraphText = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  max-width: 550px;
  color: #ffffff;
  font-size: 18px;
  letter-spacing: 0.1px;
  line-height: 1.5;

  /* Small screens */
  @media (max-width: 1024px) {
  }

  /* Tablets */
  @media (max-width: 768px) {
    width: 100%;
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
  }
`

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* Small screens */
  @media (max-width: 1024px) {
    /* padding-right: 48px; */
  }

  /* Tablets */
  @media (max-width: 768px) {
    /* padding-right: 24px; */
    flex-direction: column;
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const ImageLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto 20px;

  /* Small screens */
  @media (max-width: 1024px) {
  }

  /* Tablets */
  @media (max-width: 768px) {
    justify-content: flex-start;
    margin: 0px 0px 10px 0px;
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
  }
`

export const ImageLinkContainer = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin: 0 5px;

  /* Small screens */
  @media (max-width: 1024px) {
    max-width: 75px;
    max-height: 75px;
  }

  /* Tablets */
  @media (max-width: 768px) {
    max-width: 50px;
    max-height: 50px;
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
  }
`

export const SeparatorHeading = styled.hr`
  border-top: solid #ffffff 2px;
  width: 80%;
`
