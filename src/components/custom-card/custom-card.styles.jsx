import styled from "styled-components"

export const Title = styled.h2`
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;
  color: #000010;
  font-weight: 500;
  font-size: 1.2em;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    width: 50px;
    margin: auto;
    background: #fbbe5d;
  }

  @media (max-width: 1024px) {
  }

  /* Tablets */
  @media (max-width: 768px) {
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
    font-size: 1em;
  }
`

export const Description = styled.p`
  text-align: left;
  height: fit-content;
  font-family: sans-serif;
  margin-top: 20px;
  font-size: 16px;
  color: #0a0a0a;

  /* Small screens */
  @media (max-width: 1024px) {
  }

  /* Tablets */
  @media (max-width: 768px) {
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const VisitButton = styled.a`
  font-family: sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(
    90deg,
    rgba(255, 158, 5, 1) 0%,
    rgba(255, 8, 8, 1) 100%
  );

  width: fit-content;
  height: fit-content;
  border-radius: 5px;

  padding: 10px 30px;
  cursor: pointer;

  /* Small screens */
  @media (max-width: 1024px) {
  }

  /* Tablets */
  @media (max-width: 768px) {
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
    padding: 5px 15px;
    font-size: 12px;
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`

export const InformationContainer = styled.div`
  flex: 1 0 auto;
  padding: 20px;
  background: #ffffff;
  transform: translateX(400%);
  transition: 0.3s;
  width: 25%;
  height: fit-content;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  /* Little Note tab effect */
  &::before {
    content: "";
    position: absolute;
    left: -20px;
    height: 100px;
    width: 20px;
    margin: auto;
    background: #fbbe5d;
    border-radius: 10px 0px 0px 10px;
  }

  /* Small screens */
  @media (max-width: 1024px) {
    width: 50%;
    transform: translateX(200%);
  }

  /* Tablets */
  @media (max-width: 768px) {
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
    padding: 10px;
  }
`

export const CardContainer = styled.div`
  position: relative;

  margin: 25px;
  height: 600px;

  display: flex;
  flex-direction: column;
  border-radius: 10px;
  text-align: center;
  color: #fbbe5d;

  transition: 0.3s;
  overflow: hidden;
  background-position: center center;
  background-size: cover;
  background-color: #7f7f7f;
  background-image: ${props => props.backgroundImage};

  /* Small screens */
  @media (max-width: 1024px) {
  }

  /* Tablets */
  @media (max-width: 768px) {
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
    margin: 25px 0px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 72, 112, 0);
    transition: 0.3s;
  }

  &:hover::before {
    background: rgba(10, 72, 112, 0.3);
  }

  &:hover ${InformationContainer} {
    transform: translateX(300%);

    /* Small screens */
    @media (max-width: 1024px) {
      width: 50%;
      transform: translateX(100%);
    }

    /* Tablets */
    @media (max-width: 768px) {
    }

    /* Mobile Devices */
    @media (max-width: 480px) {
    }
  }
`
