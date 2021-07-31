import * as React from "react"

import styles from "./CoffeCard.module.scss"

interface Props{
    coffe: any
}

const CoffeCard: React.FC<Props> = ({coffe}) => {
  return (
    <div className={styles.review}>
      <div className={styles.coffeeTitle}>
        <h3>{coffe.name}</h3>
        <a href="#">Reviews</a>
        <div className={styles.lastReview}>
          <div className={styles.coffeData}>
            <span>Last Review</span>
            <span>{coffe.lastReview.createdAt}</span>
          </div>
          <span>{coffe.lastReview.review}</span>
        </div>
      </div>
      <div className={styles.reviewImage}>
        <img loading="lazy" src={ coffe.image ? coffe.image : `src/assets/images/${coffe.image}`} alt="" />
        <div className={styles.score}>
              Score
          <span>
            {coffe.rate}
            <div className={ 
              coffe.rate >= 6.6 ? `${styles.scoreHigh}` : (coffe.rate >= 3.3 ? `${styles.scoreMedium}` : `${styles.scoreLow}`)
            }></div>
          </span>
        </div>
      </div>
    </div>          
  )
}

export default CoffeCard
