import React from 'react'
import style from '../css/project.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PortfolioItem = ({ data }) => {
   return (   

      <Row className={style['sectionRow']}>
         <Col lg="8" className={style['projectImg']} >
            <img src={data.img} />
         </Col>
         <Col lg="4" xs="12">
            <div className={style['projectTitle']}>
               {data.title}
            </div>
            <div className={style['projectDescription']}>
               {data.description}
            </div>
            <a className={style['btn']} href={data.url} target="_blank" rel="noopener noreferrer">
               Visit site
               </a>
         </Col>
         <div className={style['siteDivider']}>
            <div className={style['line']}></div>
         </div>
      </Row>
   )}

export default PortfolioItem
