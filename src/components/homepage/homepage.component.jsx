import React from "react"

import {
  LinkButton,
  AnchorButton,
} from "../custom-button/custom-button.component"
import {
  HomepageContainer,
  ContentContainer,
  ImageContainer,
  TextContainer,
  ButtonContainer,
  GreetingsText,
  NameText,
  ProfessionText,
  ParagraphText,
} from "./homepage.styles"

import homepageImage from "../../images/programming-amico.png"

const Homepage = () => (
  <>
    <HomepageContainer>
      <ContentContainer>
        <ImageContainer src={homepageImage} alt="homepage image" />
        <TextContainer>
          <GreetingsText>Hello, my name is:</GreetingsText>
          <NameText>
            <span>Yanuwar Ishak</span>
            <span style={{ color: "#fbbe5d" }}>.</span>
          </NameText>
          <ProfessionText>a Front-end Web Developer</ProfessionText>
          <ParagraphText>
            As a Front-end web developer, I find that developing a pleasing to
            the eye and fully functional interface is challenging yet fun thing
            to do. I've also done some projects as UI/UX Designer, and Back-end
            Developer.
            <br />
            <br />
            Kindly check my works and send me an e-mail if you think we can work
            on something great together.
          </ParagraphText>
          <ButtonContainer>
            <LinkButton to="/portofolio">My Works</LinkButton>
            <AnchorButton href="mailto:yanuwarishak@gmail.com">
              E-mail Me
            </AnchorButton>
          </ButtonContainer>
        </TextContainer>
      </ContentContainer>
    </HomepageContainer>
  </>
)

export default Homepage
