import * as React from "react"

import starIcon from "~/assets/icons/star_black_24dp.svg"
import moneyIconFilled from "~/assets/icons/money-green.svg"
import styles from "./CoffeeReview.module.scss"
import { Review } from "../types"

interface Props{
    review: Review
    user: User
}

const CoffeeReview: React.FC<Props> = ({ review, user }) => {
  return (
    <>
      <div className={styles.reviewInfo}>
        <div className={styles.userData}>
          <div>
            <img src="" alt="" />
            <span>{user.username}</span>
          </div>
          <span>Reviews: {user.totalReviews}</span>
        </div>
        <div className={styles.review}>
          <div className={styles.rateInfo}>
            <div>
              <i><img src={starIcon} alt="star filled"/></i>
              <span><strong>{review.rate}</strong>/10</span>
            </div>
            <div>
              <i><img src={moneyIconFilled} alt="star filled"/></i>
              <span><strong>{review.prices}</strong>/5</span>
            </div>

          </div>
          <p>{`"${review.content}"`}</p>
        </div>
      </div>
    </>
  )
}

export default CoffeeReview
