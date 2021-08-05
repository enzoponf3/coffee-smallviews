import * as React from "react"
import { useParams } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"

import coffeBeans from "~/assets/images/coffee-beans.jpg"
import starIcon from "~/assets/icons/star_black_24dp.svg"
import starGreyIcon from "~/assets/icons/star-grey.svg"
import styles from "./Add.module.scss"

interface FormInput {
    coffeShop:string,
    review: string
}

const Add: React.FC = () => {
  const [rate, setRate] = React.useState<number>(0)
  const { coffeeId } = useParams<{coffeeId: string}>()
  const {register, handleSubmit } = useForm()
  const onSubmit: SubmitHandler<FormInput> = data => {
    console.log(data)
  } 
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Add a new Review</h2>
        <div className={styles.coffeeImage}><img src={coffeBeans} alt="" /></div>
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
          <button type="submit">Done!</button>
        </form>
      </div>
    </div>
  )
}

export default Add
