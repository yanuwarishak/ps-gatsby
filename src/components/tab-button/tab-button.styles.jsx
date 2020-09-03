import styled from "styled-components"

export const Tabs = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  align-self: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`

export const Tab = styled.button`
  position: relative;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.active ? "#fbbe5d" : "#dbdbdb")};
  width: fit-content;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 2px;
  padding: 0px 20px;
  font-size: 1em;
  border-bottom: ${props =>
    props.active ? "3px solid #fbbe5d" : "1px solid lightgray"};
  background-color: transparent;
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  /* transition: background-color 0.5s ease-in-out; */

  /* Small screens */
  @media (max-width: 1024px) {
    height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  }

  /* Modified Tablets */
  @media (max-width: 790px) {
  padding: 0px 10px;
    height: ${props => (props.active ? "3.4em" : "2.8em; top:.6em")};
  }

  /* Mobile Devices */
  @media (max-width: 480px) {
    height: ${props => (props.active ? "3.6em" : "3em; top:.6em")};
  }
`

export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: row wrap;
`
