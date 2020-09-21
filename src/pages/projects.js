import React from "react"
import Layout from "../components/layout"

import data from "../constants/Projects"

import style from '../css/project.module.css'
import PortfolioItem from "../components/portfolioItem"


import "../components/css/bootstrap.min.css";


import { Container } from "react-bootstrap"

const projects = () => {

  return (

    <Layout>
      <Container className={style['spacingTop']}>
        <div className={style['siteDivider']}>
          <div className={style['line']}></div>
          <h3> <span>Our Web Based Projects</span></h3>
        </div>
          {
            data.map(item => {
              return (
                <PortfolioItem data={item} key={item.key}></PortfolioItem>
              )
            })
          }
      </Container>      
    </Layout>
    
  )
}

export default projects
