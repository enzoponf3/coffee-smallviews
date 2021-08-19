import * as React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useParams } from "react-router-dom"

import styles from "./../Form.module.scss"
import starIcon from "~/assets/icons/star_black_24dp.svg"
import starGreyIcon from "~/assets/icons/star-grey.svg"
import moneyIcon from "~/assets/icons/money-green.svg"
import moneyGreyIcon from "~/assets/icons/money-grey.svg"
import { CoffeeShop } from "../../coffeeShop/types"
import { Review } from "../../review/types"


const ReviewForm: React.FC = () => {
  const [rate, setRate] = React.useState<number>(0)
  const [price, setPrice] = React.useState<number>(0)
  const { coffeeId } = useParams<{coffeeId: string}>()
  const {register, handleSubmit } = useForm()

  
interface FormInput {
    coffeeShop: CoffeeShop,
    review: Review
}

const onSubmit: SubmitHandler<FormInput> = data => {
  console.log(data)
} 
return (
  <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    <label>Coffe Shop</label>
    {
      coffeeId === undefined 
        ? <input 
          type="text"
          {...register("coffeeShop.name",{ required: "Please enter the coffee shop name"})}
          placeholder="Enter the coffee shop name" 
        />
        : <input defaultValue={coffeeId} type="text" readOnly={true} />
    }
    <label>short review</label>
    <textarea 
      {...register("review.content",{required: "Please write a short review."})}
      placeholder="Enter a short review"/>
    <label>CoffeShop Image Link</label>
    <input 
      type="text" 
      {...register("coffeeShop.image")}
      placeholder="(Optional) Enter a link to the coffee shop image" />
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
)
}

export default ReviewForm
