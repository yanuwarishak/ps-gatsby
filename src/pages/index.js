import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Homepage from "../components/homepage/homepage.component"

export default () => (
  <>
    <SEO title="Home" />
    <Layout>
      <Homepage />
    </Layout>
  </>
)
