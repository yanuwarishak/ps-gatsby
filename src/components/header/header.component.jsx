import React from "react"
import { Link } from "gatsby"
import "./header.css"

import styled from "styled-components"

const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0px auto;
  padding: 24px 16px;

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
    flex-direction: column;
  }
`

const HomepageLink = styled(Link)`
  /* flex-grow: 10; */
  font-size: 40px;
  color: #000010;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  border: solid 2px #ffbe5d;
  padding: 10px 5px;
  box-shadow: inset 100px 0 0 0 #fbbe5d;

  /* Small screens */
  @media (max-width: 1024px) {
  }

  /* Tablets */
  @media (max-width: 768px) {
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
    /* text-align: center; */
    align-self: center;
  }
`

const HeaderLink = styled(Link)`
  font-size: 20px;
  font-family: sans-serif;
  font-weight: bold;
  text-align: left;
  color: #ffffff;
  text-decoration: none;
  margin-right: 48px;
  padding: 0px 4px;

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #fbbe5d;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 25%;
  }

  /* Small screens */
  @media (max-width: 1024px) {
  }

  /* Tablets */
  @media (max-width: 768px) {
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
    margin-right: 10px;
  }
`

const NavigationContainer = styled.div`
  display: flex;

  /* Small screens */
  @media (max-width: 1024px) {
  }

  /* Tablets */
  @media (max-width: 768px) {
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
    padding-top: 30px;
    align-self: center;
  }
  
`

const Header = () => (
  <NavigationBar>
    <HomepageLink to="/" activeClassName="homepage-tag">
      YI
    </HomepageLink>
    <NavigationContainer>
      <HeaderLink to="/portofolio" activeClassName="link-tag">
        Portofolio
      </HeaderLink>
      <HeaderLink to="/blog" activeClassName="link-tag">
        Blog
      </HeaderLink>
      <HeaderLink to="/about" activeClassName="link-tag">
        About
      </HeaderLink>
    </NavigationContainer>
  </NavigationBar>
)

export default Header
