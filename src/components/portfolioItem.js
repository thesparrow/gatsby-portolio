import React from 'react'
import style from '../css/project.module.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../components/css/bootstrap.min.css";

const PortfolioItem = ({ data }) => {
   return (     
      <Row className={style['sectionRow']}>
         <Col lg="8" className={style['projectImg']} >
               <img src={data.img}/>
            </Col>
            <Col lg="4" xs="12">
            <div className={style['projectTitle']}>
                  {data.title}
               </div>
            <div className={style['projectDescription']}>
                  {data.description}
               </div>
               <a class="btn btn-outline-primary mt-4" href={data.url} target="_blank" rel="noopener noreferrer">
                  Visit site
               </a>
            </Col>
         <div className={style['siteDivider']}>
            <div className={style['line']}></div>
         </div>
         </Row>
   )}

export default PortfolioItem
