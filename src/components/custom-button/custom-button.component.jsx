import styled, { css } from "styled-components"
import { Link } from "gatsby"

const linkStyle = css`
  font-family: sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;

  width: fit-content;
  height: 50px;

  border: solid #fbbe5d 2px;
  padding: 10px 30px;
  cursor: pointer;

  box-shadow: inset 0 0 0 0 #31302b;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  transition: all ease 0.5s;

  &:hover {
    color: #000010;
    box-shadow: inset 150px 0 0 0 #fbbe5d;
  }

`

export const LinkButton = styled(Link)`
  ${linkStyle}
`

export const AnchorButton = styled.a`
  ${linkStyle}
`
