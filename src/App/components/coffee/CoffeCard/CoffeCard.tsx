import * as React from "react"

import starIcon from "~/assets/icons/star_black_24dp.svg"
import priceIcon from "~/assets/icons/attach_money_black_24dp.svg"
import styles from "./CoffeCard.module.scss"

interface Props{
    coffee: any,
    selectCoffee: () => void
}

const CoffeCard: React.FC<Props> = ({coffee, selectCoffee}) => {
  return (
    <div onClick={selectCoffee} className={styles.review}>
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
    </div>          
  )
}

export default CoffeCard
