import React from "react"

import {
  ContentContainer,
  TextContainer,
  HeadingText,
  SubText,
  ParagraphText,
  ContentHeader,
  ImageLink,
  ImageLinkContainer,
} from "../sub-page.styles"

import youtubeLogo from "../../assets/youtube-logo.png"
import githubLogo from "../../assets/github-logo.png"
import behanceLogo from "../../assets/behance-logo.png"

import TabShowcase from "../tab-button/tab-button.component"

const PortofolioPage = () => (
  <>
    <ContentContainer>
      <ContentHeader>
        <TextContainer>
          <HeadingText>Portofolio</HeadingText>
          <SubText>Works I have done</SubText>
          <ParagraphText>
            Apart from being a Front-end Developer, in the span of 4 years
            learning at my University, I've done several works that put me in
            different roles. There was a period of time where I mostly worked as
            a graphic designer and a video editor. I've also done some project
            as an Android Developer. In between that period I'm also taking some
            time learning about UI and UX Design.
          </ParagraphText>
        </TextContainer>
        <ImageLink>
          <a href="https://github.com/yanuwarishak" target="_blank" rel="noopener noreferrer">
            <ImageLinkContainer src={githubLogo} alt="Github Logo" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC-bcZ3seq6f8W_v6qTwU6mQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageLinkContainer src={youtubeLogo} alt="Youtube Logo" />
          </a>
          <a href="https://www.behance.net/yanuwarishak" target="_blank" rel="noopener noreferrer">
            <ImageLinkContainer src={behanceLogo} alt="Behance Logo" />
          </a>
        </ImageLink>
      </ContentHeader>
      <TabShowcase />
    </ContentContainer>
  </>
)

export default PortofolioPage
