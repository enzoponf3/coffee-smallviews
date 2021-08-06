import * as React from "react"

import starIcon from "~/assets/icons/star_black_24dp.svg"
import priceIcon from "~/assets/icons/attach_money_black_24dp.svg"
import styles from "./CoffeCard.module.scss"
import { Link } from "react-router-dom"

interface Props{
    coffee: any
}

const CoffeCard: React.FC<Props> = ({coffee}) => {
  return (
    <Link to={`/review/${coffee.id}`} className={styles.review}>
      <div className={styles.coffeeData}>
        <h3>{coffee.name}</h3>
        <div className={styles.score}>
          <i className={styles.icon}><img src={starIcon} alt="star" /></i>
          <span className={styles.rate}>
            {coffee.rate}
          </span>
          <span className={styles.prices}>
            { new Array(coffee.prices).fill(0).map( (e, i) =>{
              return <i key={i}><img src={priceIcon} alt="money" /></i>
            })
            }</span>
        </div>
      </div>
      <div className={styles.reviewImage}>
        <img decoding="async" loading="lazy" src={ coffee.image ? coffee.image : `src/assets/images/${coffee.image}`} alt="" />
      </div>
    </Link>          
  )
}

export default CoffeCard
