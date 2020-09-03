import React from "react"

import {
  MainContainer,
  CardContainer,
  Title,
  Description,
  ButtonContainer,
  VisitButton,
  InformationContainer,
} from "./custom-card.styles"

// import {AnchorButton} from "../custom-button/custom-button.component"

const Card = ({ work }) => {
  const { imageUrl, link, name, description } = work
  return (
    <>
      <MainContainer>
        <CardContainer backgroundImage={`url(${imageUrl})`}>
          <InformationContainer>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <ButtonContainer>
              <VisitButton href={link} target="_blank" rel="noopener noreferrer">
                Visit Work &#62;
              </VisitButton>
            </ButtonContainer>
          </InformationContainer>
        </CardContainer>
      </MainContainer>
    </>
  )
}

export default Card
