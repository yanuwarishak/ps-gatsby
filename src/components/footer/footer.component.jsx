import React from "react"

import {
  FooterContainer,
  HrLine,
  TextContainer,
  WebsiteDetail,
} from "./footer.styles"

const Footer = () => (
  <>
    <FooterContainer>
      <HrLine />
      <h3>See me in another website</h3>
      <TextContainer>
        <WebsiteDetail>
          CSS-Tricks* is created, written by, and maintained by Chris Coyier and
          a team of swell people. The tech stack for this site is fairly boring.
          That's a good thing! I've used WordPress since day one all the way up
          to v17, a decision I'm very happy with. I also leverage Jetpack for
          extra functionality and Local for local development.
        </WebsiteDetail>
        <div>
          © {new Date().getFullYear()}. Self-made template built with Gatsby.js{" "}
        </div>
      </TextContainer>
    </FooterContainer>
  </>
)

export default Footer
