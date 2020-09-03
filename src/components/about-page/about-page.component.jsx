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

import {
  ImagePhoto,
  PhotoCaption,
  ParagraphContainer,
  ParagraphHeading,
  BodyText,
} from "./about-page.styles"

import linkedinLogo from "../../assets/linkedin-logo.png"
import steamLogo from "../../assets/steam-logo.png"
import spotifyLogo from "../../assets/spotify-logo.png"
import aboutPhoto from "../../assets/about-photo.jpg"

const AboutPage = () => (
  <>
    <ContentContainer>
      <ContentHeader>
        <TextContainer>
          <HeadingText>Hi There</HeadingText>
          <SubText>Here's something about me and this site</SubText>
          <ParagraphText>
            First of all, you made it all the way to this page, thanks a lot. If
            you're interested on my professional work related you can head
            straight to my LinkedIn. We can play some games too, just add me on
            my Steam account and sent me an invite. And if by any chance you're
            interested about my music taste you can check my carefully crafted
            playlist that I made in my Spotify account. See you!
          </ParagraphText>
        </TextContainer>
        <ImageLink>
          <a
            href="https://www.linkedin.com/in/yanuwar-ishak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageLinkContainer src={linkedinLogo} alt="LinkedIn Logo" />
          </a>
          <a
            href="https://steamcommunity.com/id/sevoviel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageLinkContainer src={steamLogo} alt="Steam Logo" />
          </a>
          <a
            href="https://open.spotify.com/user/212rshe3omsf3edodvt4rqb7q?si=jd_1uzz0QP6LuzsNHo21dg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageLinkContainer src={spotifyLogo} alt="Spotify Logo" />
          </a>
        </ImageLink>
      </ContentHeader>
      <ImagePhoto src={aboutPhoto} alt="Hi it's me" />
      <PhotoCaption>A photo of me at Kaliadem Bunker, Circa 2018</PhotoCaption>
      <ParagraphContainer>
        <ParagraphHeading>About me</ParagraphHeading>
        <BodyText>
          As you may already now, my name is Yanuwar Ishak. I'm a Bachelor of
          Engineering majoring in Information Technology. In 4 years of my
          study, I've done several projects with various role and participating
          in many kinds of competition <br />
          <br />
          At my first 2 years at University I mainly do jobs around designing
          and editing, I did a lot of poster design and some motion graphic
          using Adobe's products such as Photoshop, Illustrator, Premiere Pro,
          After Effects and XD. Most of my early study years was spent in
          organization activity where the active time was around 1,5 year.
          <br />
          <br />
          I spent the last 2 years exploring the developer world and competing
          in IT related competition. My exploration starts as UI/UX Designer,
          for me, it is kind of translates my experience with poster designing
          into application designing. I have some friends where we made a team
          to participate in UX Competition and won 3rd place. I'm started to
          delve into developer role after this competition. My main motivation
          was that, I want to be able to develop the thing that I designed into
          a proper working application, thus I started learning application
          development.
          <br />
          <br />
          I've worked as an Android developer in my final thesis project using
          Unity, however this didn't last long since I personally didn't enjoy
          it. I spent my last year at University learning Web Development. I've
          learned both Back-end and Front-end. For Back-end I've tried several
          programming language like PHP using Laravel and Node.js using Express.
          As for Front-end I've tried several frameworks like jQuery, React and
          Svelte.
          <br />
          <br /> At this point of my exploration I found that Front-end
          Developer suits me better in overall. It acts as the middle road of my
          interest between coding, UI/UX Design and Designing in general.
          However, I would still love to explore this developer world. Since
          there are still so many things that I haven't learn yet, I believe
          that having at least basic understanding on how everything works will
          make me a better developer in general.
        </BodyText>
        <ParagraphHeading style={{ marginTop: "40px" }}>
          About this Page
        </ParagraphHeading>
        <BodyText>
          Developed in 2020, this site is using Gatsby and being hosted on
          Netlify. Feel free to send me an e-mail if you have any question
          regarding this site.
        </BodyText>
      </ParagraphContainer>
    </ContentContainer>
  </>
)

export default AboutPage
