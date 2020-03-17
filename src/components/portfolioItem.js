import React from 'react'
import { Col, Image } from 'react-bootstrap'
import styles from '../css/project.module.css'


const PortfolioItem = ({ data }) => {
   var projectImage =  "static/" + data.img;

   return (
      <Col lg="3" md="3" xs="6">
         <a href={data.url} target="_blank">
            <Image className={styles.imgRounded} src={projectImage} rounded />
         </a>
         <p>{data.description}</p>
      </Col>
   )
}

export default PortfolioItem
