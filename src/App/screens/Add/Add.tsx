import * as React from "react"

import coffeBeans from "~/assets/images/coffee-beans.jpg"
import styles from "./Add.module.scss"
import { Helmet } from "react-helmet-async"
import ReviewForm from "~/App/components/form/reviewForm"

const Add: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Coffe Smallviews | Add a Review</title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h2>Add a new Review</h2>
          <div className={styles.coffeeImage}><img decoding="async" loading="lazy" src={coffeBeans} alt="" /></div>
          <ReviewForm/>
        </div>
      </div>
    </>
  )
}

export default Add
