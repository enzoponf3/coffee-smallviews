import * as React from "react"
import { useParams } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"

import coffeBeans from "~/assets/images/coffee-beans.jpg"
import starIcon from "~/assets/icons/star_black_24dp.svg"
import starGreyIcon from "~/assets/icons/star-grey.svg"
import moneyIcon from "~/assets/icons/money-green.svg"
import moneyGreyIcon from "~/assets/icons/money-grey.svg"
import styles from "./Add.module.scss"
import { Helmet } from "react-helmet-async"

interface FormInput {
    coffeShop:string,
    review: string
}

const Add: React.FC = () => {
  const [rate, setRate] = React.useState<number>(0)
  const [price, setPrice] = React.useState<number>(0)
  const { coffeeId } = useParams<{coffeeId: string}>()
  const {register, handleSubmit } = useForm()
  const onSubmit: SubmitHandler<FormInput> = data => {
    console.log(data)
  } 

  const coffee = {
    name:"Starbucks"
  }

  return (
    <>
      <Helmet>
        <title>{ coffeeId ? `Add a Review to ${coffee.name}` :"Add a Review"}</title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h2>Add a new Review</h2>
          <div className={styles.coffeeImage}><img decoding="async" loading="lazy" src={coffeBeans} alt="" /></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Coffe Shop</label>
            {
              coffeeId === undefined 
                ? <input placeholder="Enter the coffee shop name" type="text"/>
                : <input defaultValue={coffeeId} type="text" readOnly={true} />
            }
            <label>short review</label>
            <textarea placeholder="Enter a short review"/>
            <div className={styles.rateSelector}>
              {new Array(10).fill(0).map((e,i) => {
                return <i key={i} onClick={() => setRate(i + 1)}>
                  {
                    i < rate 
                      ? <img loading="lazy" src={starIcon} alt="filled star"/>
                      : <img loading="lazy" src={starGreyIcon} alt="empty star"/>
                  }
                </i>
              })}
            </div>
            <div className={styles.pricesSelector}>
              {new Array(5).fill(0).map((e,i) => {
                return <i key={i} onClick={() => setPrice(i + 1)}>
                  {
                    i < price 
                      ? <img decoding="async" loading="lazy" src={moneyIcon} alt="filled money"/>
                      : <img decoding="async" loading="lazy" src={moneyGreyIcon} alt="empty money"/>
                  }
                </i>
              })}
            </div>
            <button type="submit">Done!</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Add
