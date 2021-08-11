import * as React from "react"
import { Helmet } from "react-helmet-async"
import { Link, Redirect, useParams } from "react-router-dom"

import closeIcon from "~/assets/icons/close_white_24dp.svg"
import penIcon from "~/assets/icons/edit_white_24dp.svg"
import styles from "./Review.module.scss"

import { Review } from "~/App/components/review/types"
import CoffeeReview from "~/App/components/coffeeShop/CoffeeReview" 
import { User } from "~/App/components/user/types"
import userApi from "~/App/components/user/api"


const Review: React.FC= () => {
  const { coffeeId } = useParams<{coffeeId: string}>()

  const coffeShop = {
    id: "17645157",
    name: "the shelter coffee",
    rate: 7.3, 
    image: "https://www.lacafeteguia.com/wp-content/uploads/2018/04/salon-The-Shelter-Foto-La-Cafeteguia-580x387.jpg"
  }

  const reviews: Review[] = [
    {
      id: "1",
      coffeId:"17645157",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum autem iste, modi nostrum, natus consequuntur, adipisci at voluptatum totam accusamus atque impedit incidunt hic! Molestias magni assumenda minus officia veniam suscipit atque, tempora quae amet iste perspiciatis vero consectetur alias soluta ea odit. Quos delectus maxime itaque quisquam dolore illo magni.",
      createdAt:"02-04-2021",
      userId:"9999",
      rate:8,
      prices:4
    },{
      id: "2",
      coffeId:"17645157",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum autem iste, modi nostrum, natus consequuntur, adipisci at voluptatum totam accusamus atque impedit incidunt hic! Molestias magni assumenda minus officia veniam suscipit atque, tempora quae amet iste perspiciatis vero consectetur alias soluta ea odit. Quos delectus maxime itaque quisquam dolore illo magni.",
      createdAt:"02-04-2021",
      userId:"999",
      rate:7,
      prices:3
    },{
      id: "3",
      coffeId:"17645157",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum autem iste, modi nostrum, natus consequuntur, adipisci at voluptatum totam accusamus atque impedit incidunt hic! Molestias magni assumenda minus officia veniam suscipit atque, tempora quae amet iste perspiciatis vero consectetur alias soluta ea odit. Quos delectus maxime itaque quisquam dolore illo magni.",
      createdAt:"02-04-2021",
      userId:"99",
      rate:7,
      prices:3
    },{
      id: "4",
      coffeId:"17645157",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum autem iste, modi nostrum, natus consequuntur, adipisci at voluptatum totam accusamus atque impedit incidunt hic! Molestias magni assumenda minus officia veniam suscipit atque, tempora quae amet iste perspiciatis vero consectetur alias soluta ea odit. Quos delectus maxime itaque quisquam dolore illo magni.",
      createdAt:"02-04-2021",
      userId:"12",
      rate:6,
      prices:5
    },
  ]
  let usersWithReview: User[] = []

  const retrieveUser = async( userId: string ) => {
    const user = await userApi.get(userId)
    usersWithReview = [...usersWithReview, user ]
    return user  
  }

  const findUser = (userId: string) => {
    return usersWithReview.find( u => u.id === userId) ?? retrieveUser(userId)
  }

  if(coffeeId) return <Redirect to="/"/>

  return (
    <>
      <Helmet>
        <title>Review | {coffeShop.name}</title>
        <meta name="description" content={`Review of the coffee shop ${coffeShop.name}`}/>
      </Helmet>
      <div className={styles.reviewContainer}>
        <button className={styles.close} type="button"><i><img src={closeIcon} alt="close" /></i></button>
        <div className={styles.coffeInfo}>
          <h2>{coffeShop.name}</h2>
          <div>
                Score
            <span>
              {coffeShop.rate}
            </span>
          </div>
          <Link to={`/add/${coffeeId}`}>Add
            <i><img src={penIcon} alt="pen" /></i>
          </Link>
        </div>
        <div className={styles.reviews}>
          {reviews && reviews.map(r =>
            <CoffeeReview key={ r.id } review={ r } user={ findUser(r.userId) }/>
          )}
        </div>
      </div>
    </>
  )
}

export default Review
