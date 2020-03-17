import React from "react"
import Layout from "../components/layout"
import styles from "../css/project.module.css"

import data from "../constants/Projects"
import PortfolioItem from "../components/portfolioItem"

import {Container,Row} from "react-bootstrap"

const projects = () => {
  console.log(data)
  return (
    <Layout>
      
      <section className={styles.portfolio}>
       
        <Container>
        <h1> - Projects - </h1>
        <Row>
        {
          data.map(item => {
            return (
              <PortfolioItem data={item} key={item.key}></PortfolioItem>
             
            )
            
          })
        }
        </Row>
        </Container>
        
       
      </section>
    </Layout>
      
  )
}

export default projects
