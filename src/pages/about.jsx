import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutPage from "../components/about-page/about-page.component"

export default () => (
  <>
    <SEO title="About" />
    <Layout>
      <AboutPage />
    </Layout>
  </>
)
