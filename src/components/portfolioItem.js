import React from 'react'
import { Col, Image } from 'react-bootstrap'
import styles from '../css/project.module.css'


const PortfolioItem = ({ data }) => {
   var projectImage = data.img;

   return (
      <Col lg="3" md="3" xs="12">
         <a href={data.url} target="_blank">
            <Image className={styles.imgRounded} src={projectImage} rounded />
         </a>
         <h3>{data.title}</h3>
            <p>{data.description}</p>
      </Col>
   )
}

export default PortfolioItem
