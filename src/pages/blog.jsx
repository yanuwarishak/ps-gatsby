import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPage from "../components/blog-page/blog-page.component"

export default () => (
  <>
    <SEO title="Blog" />
    <Layout>
      <BlogPage />
    </Layout>
  </>
)
