import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortofolioPage from "../components/portofolio-page/portofolio-page.component"

export default () => (
  <>
    <SEO title="Portofolio" />
    <Layout>
      <PortofolioPage />
    </Layout>
  </>
)
