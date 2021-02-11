import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
const IndexPage = () => (
  <Layout>
    <SEO title="Anna Shilova Professional Web Developer" description="Anna Shilova Professional web developer located in Los 
                Angeles, California"
                keywords="Anna Shilova professional web developer, UX/UI developer, wordpress developer"/>
              
    <meta name="google-site-verification" content="yN2_J9a03pTHf9YmxD-I4hK5BfEvRO4MdD575T71lGg" />
      
    <HomeBanner></HomeBanner>
  </Layout>
)

export default IndexPage
