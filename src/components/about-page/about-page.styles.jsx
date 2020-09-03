import styled from "styled-components"

export const ParagraphContainer = styled.div`
  width: 85%;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ParagraphHeading = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: #fbbe5d;
  align-self: flex-start;
`

export const BodyText = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 8px;
  color: #ededed;
  font-size: 18px;
  line-height: 1.5;
  align-self: flex-start;

  /* Small screens */
  @media (max-width: 1024px) {
  }

  /* Tablets */
  @media (max-width: 768px) {
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
  }
`

export const ImagePhoto = styled.img`
  width: 100%;
  margin: auto;
  padding: 20px 0px;
  margin-bottom: 10px;
`

export const PhotoCaption = styled.p`
  color: #fbbe5d;
  font-size: 14px;
  text-align: center;
  margin-top: -10px;
`


