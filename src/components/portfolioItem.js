import React from 'react'
import style from '../css/project.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const PortfolioItem = ({ data }) => {
   return (   

      <Row className={style['sectionRow']}>
         <Col lg="8" className={style['projectImg']} >
            <Image src={data.img} fluid />
         </Col>
         <Col className={style['project']} lg="4" xs="12">
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
         <hr className="hr-bold my-2" />
         <div className={style['siteDivider']}>
            <div className={style['line']}></div>
         </div>
      </Row>
   )}

export default PortfolioItem
