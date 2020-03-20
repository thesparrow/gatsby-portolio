import React from "react"
import Layout from "../components/layout"
import styles from '../css/project.module.css'

import data from "../constants/Projects"
import PortfolioItem from "../components/portfolioItem"
import Title from "../components/Title"

const projects = () => {

  return (

    <Layout>
      <section className={styles.portfolio}>
        <Title title="projects"></Title>
        <div className={styles.gridContainer}>
          {
            data.map(item => {
              return (
                <PortfolioItem data={item} key={item.key}></PortfolioItem>
              )
            })
          }
        </div>
      </section>
    </Layout>
  )
}

export default projects
