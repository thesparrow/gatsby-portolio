import React from 'react'
import styles from '../css/project.module.css'

const PortfolioItem = ({ data }) => {
   return (
      <div className={styles.portfolio}>
         <div className={styles.gridContainer}>

            <div class="location-image">
               <h4>{data.title}</h4>
               <a href={data.url} target="_blank">
                  <img
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
