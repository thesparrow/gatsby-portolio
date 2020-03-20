import React from 'react'
import styles from '../css/project.module.css'

const PortfolioItem = ({ data }) => {
   return (
      <div className={styles.portfolio}>
         <div className={styles.gridContainer}>

            <div class="location-image"> 
               <h3>{data.title}</h3>
            <a href={data.url}>
               <img
               width="300"
               height="169"
               src={data.img}
               alt={data.title}
               />
               
            </a>
               
               <p>{data.description} </p>
            </div>        
         
         </div>
         
      </div>
      
   )
}

export default PortfolioItem
