import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
const IndexPage = () => (
  <Layout>
    <SEO title="Anna Shilova Professional Web Developer" 
        description="Anna Shilova Professional web developer located in Los 
                Angeles, California"
        keywords="Anna Shilova, professional web developer, UX/UI developer, 
                  web developer"/>    
    <HomeBanner></HomeBanner>
  </Layout>
)

export default IndexPage
