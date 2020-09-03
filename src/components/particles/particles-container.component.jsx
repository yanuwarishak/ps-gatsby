import React from "react"
import Particles from "react-particles-js"

import styled from "styled-components"

const ParticlesContainer = styled.div`
  z-index:-1;
`

const ParticlesBackground = () => (
  <ParticlesContainer>
    <Particles
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#000010",
      }}
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.35,
          },
          move: {
            direction: "none",
            speed: 0.5,
          },
          size: {
            value: 0.5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.5,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  </ParticlesContainer>
)

export default ParticlesBackground
