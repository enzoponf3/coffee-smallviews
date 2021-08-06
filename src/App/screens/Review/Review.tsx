import * as React from "react"
import { Helmet } from "react-helmet-async"
import { Link, useHistory, useParams } from "react-router-dom"

import closeIcon from "~/assets/icons/close_white_24dp.svg"
import starIcon from "~/assets/icons/star_black_24dp.svg"
import moneyIconFilled from "~/assets/icons/money-green.svg"
import penIcon from "~/assets/icons/edit_white_24dp.svg"
import styles from "./Review.module.scss"

const Review: React.FC= () => {
  const { coffeeId } = useParams<{coffeeId: string}>()

  const coffeShop = {
    id: "17645157",
    name: "the shelter coffee",
    rate: 7.3, 
    image: "https://www.lacafeteguia.com/wp-content/uploads/2018/04/salon-The-Shelter-Foto-La-Cafeteguia-580x387.jpg",
    lastReview: {
      userId: "187468241241",
      reviewId:"7575757",
      createdAt: "20-07-2021",
      review: "Nice place, low lights, great cakes. Average prices. Would recomend.",
      rate: 5,
    }
  }

  const users = [
    {
      id:"12",
      username:"Wara Were",
      email:"warawara@gmail.com",
      totalReviews:7678
    }
    ,{
      id:"99",
      username:"Ana Vita",
      email:"vita_ana@gmail.com",
      totalReviews:86
    }
    ,{
      id:"999",
      username:"Salji Jon",
      email:"jonci@gmail.com",
      totalReviews:125
    }
    ,{
      id:"9999",
      username:"Mani Qui",
      email:"maniqui@gmail.com",
      totalReviews:2
    },
  ]

  const reviews = [
    {
      id: "1",
      coffeId:"17645157",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum autem iste, modi nostrum, natus consequuntur, adipisci at voluptatum totam accusamus atque impedit incidunt hic! Molestias magni assumenda minus officia veniam suscipit atque, tempora quae amet iste perspiciatis vero consectetur alias soluta ea odit. Quos delectus maxime itaque quisquam dolore illo magni.",
      createdAt:"02-04-2021",
      userId:"9999",
      rate:8,
      prices:4
    },{
      id: "2",
      coffeId:"17645157",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum autem iste, modi nostrum, natus consequuntur, adipisci at voluptatum totam accusamus atque impedit incidunt hic! Molestias magni assumenda minus officia veniam suscipit atque, tempora quae amet iste perspiciatis vero consectetur alias soluta ea odit. Quos delectus maxime itaque quisquam dolore illo magni.",
      createdAt:"02-04-2021",
      userId:"999",
      rate:7,
      prices:3
    },{
      id: "3",
      coffeId:"17645157",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum autem iste, modi nostrum, natus consequuntur, adipisci at voluptatum totam accusamus atque impedit incidunt hic! Molestias magni assumenda minus officia veniam suscipit atque, tempora quae amet iste perspiciatis vero consectetur alias soluta ea odit. Quos delectus maxime itaque quisquam dolore illo magni.",
      createdAt:"02-04-2021",
      userId:"99",
      rate:7,
      prices:3
    },{
      id: "4",
      coffeId:"17645157",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum autem iste, modi nostrum, natus consequuntur, adipisci at voluptatum totam accusamus atque impedit incidunt hic! Molestias magni assumenda minus officia veniam suscipit atque, tempora quae amet iste perspiciatis vero consectetur alias soluta ea odit. Quos delectus maxime itaque quisquam dolore illo magni.",
      createdAt:"02-04-2021",
      userId:"12",
      rate:6,
      prices:5
    },
  ]

  const history = useHistory()
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
            <div key={r.id} className={styles.reviewInfo}>
              <div className={styles.userData}>
                <div>
                  <img src="" alt="" />
                  <span>{users.find(u => u.id === r.userId)?.username}</span>
                </div>
                <span>Reviews: {users.find(u => u.id === r.userId)?.totalReviews}</span>
              </div>
              <div className={styles.review}>
                <div className={styles.rateInfo}>
                  <div>
                    <i><img src={starIcon} alt="star filled"/></i>
                    <span><strong>{r.rate}</strong>/10</span>
                  </div>
                  <div>
                    <i><img src={moneyIconFilled} alt="star filled"/></i>
                    <span><strong>{r.prices}</strong>/5</span>
                  </div>

                </div>
                <p>{`"${r.review}"`}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Review
