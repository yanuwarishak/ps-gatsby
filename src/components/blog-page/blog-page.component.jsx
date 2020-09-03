import React from "react"

import {
  ContentContainer,
  TextContainer,
  HeadingText,
  SubText,
  ParagraphText,
} from "../sub-page.styles"

const BlogPage = () => (
  <>
    <ContentContainer>
      <TextContainer>
        <HeadingText>Thoughts Space</HeadingText>
        <SubText>Here is where I (supposedly) write thing</SubText>
        <ParagraphText>
          Hi, I've been thinking about writing A LOT of thing, but there
          are some problems and distraction that oftenly happen when I want to
          write. I'll put this blog page here empty just to haunt me of all the
          so-called-thoughts that I'm trying to write. Keep on updated, someday
          (maybe) there will be something written here.
        </ParagraphText>
      </TextContainer>
    </ContentContainer>
  </>
)

export default BlogPage
