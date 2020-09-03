import React, { useState } from "react"
import PORTOFOLIO_DATA from "./portofolio.data"
import {
  Tabs,
  Tab,
  Content,
  ContentContainer,
  CardContainer,
} from "./tab-button.styles"
import Card from "../custom-card/custom-card.component"

const TabShowcase = () => {
  const [active, setActive] = useState(0)
  const [works] = useState(PORTOFOLIO_DATA)

  console.log(works)

  const handleClick = e => {
    const index = parseInt(e.target.id, 0)
    if (index !== active) {
      setActive(index)
    }
  }

  return (
    <>
      <Tabs>
        <Tab style={{ width: "30px", cursor: "none" }}>&nbsp;</Tab>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          Web Developer
        </Tab>
        <Tab onClick={handleClick} active={active === 1} id={1}>
          Android Developer
        </Tab>
        <Tab onClick={handleClick} active={active === 2} id={2}>
          UI & UX Designer
        </Tab>
        <Tab style={{ width: "30px", cursor: "none" }}>&nbsp;</Tab>
      </Tabs>
      <ContentContainer>
        <Content active={active === 0}>
          <CardContainer>
            {works
              .filter(work => work.category === "webdev")
              .map(filtered => (
                <Card key={filtered.id} work={filtered} />
              ))}
          </CardContainer>
        </Content>
        <Content active={active === 1}>
          <CardContainer>
            {works
              .filter(work => work.category === "android")
              .map(filtered => (
                <Card key={filtered.id} work={filtered} />
              ))}
          </CardContainer>
        </Content>
        <Content active={active === 2}>
          <CardContainer>
            {works
              .filter(work => work.category === "uiux")
              .map(filtered => (
                <Card key={filtered.id} work={filtered} />
              ))}
          </CardContainer>
        </Content>
      </ContentContainer>
    </>
  )
}

export default TabShowcase
