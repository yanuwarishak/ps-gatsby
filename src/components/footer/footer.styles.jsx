import styled from "styled-components"

export const FooterContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  position: absolute;
  /* bottom: -20px; */
  color: #fff;
  align-self: center;
  text-align: center;
  width: 100%;
  height: 2.5rem;
  /* margin: 30px; */
`

export const HrLine = styled.hr`
  width: 80%;
  border: 0;
  height: 5px;
  margin: 4rem auto;
  background-image: linear-gradient(90deg, #fff79a, #ff8100);
  opacity: 50%;
  border-radius: 5px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`

export const WebsiteDetail = styled.div`
  text-align: left;
  font-family: sans-serif;
  width: 40%;
`
