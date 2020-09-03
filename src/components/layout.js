/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header.component"
// import Footer from "./footer/footer.component"
import ParticlesBackground from "../components/particles/particles-container.component"
import "./layout.css"

const PageContainer = styled.div`
  position: relative;
  /* min-height: 100vh; */
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const Layout = ({ children }) => {
  return (
    <>
      <PageContainer>
        <ParticlesBackground />
        <ContentContainer>
          <Header />
          {/* Render component here */}
          <main>{children}</main>
        </ContentContainer>
      </PageContainer>
    </>
  )
}

export default Layout
