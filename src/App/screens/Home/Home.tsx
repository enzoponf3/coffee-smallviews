import * as React from "react"
import { motion } from "framer-motion"

import styles from "./Home.module.scss"
import CoffeCard from "~/App/components/coffee/CoffeCard"

const Home: React.FC = () => {
  
  const coffees = [
    {
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
    },
    {
      id: "21344",
      name: "starbucks",
      rate: 2.6, 
      image: "https://www.unicenter.com.ar/files/get/801",
      lastReview: {
        userId: "187468241241",
        reviewId:"7575757",
        createdAt: "20-07-2021",
        review: "Nice place, low lights, great cakes. Average prices. Would recomend.",
        rate: 5,
      }
    },
    {
      id: "21344",
      name: "cafe martinez",
      rate: 4.8, 
      image: "https://www.cronista.com/files/image/289/289823/5ffe0068af6af.jpg",
      lastReview: {
        userId: "187468241241",
        reviewId:"7575757",
        createdAt: "20-07-2021",
        review: "Nice place, low lights, great cakes. Average prices. Would recomend.",
        rate: 5,
      }
    },
    {
      id: "123",
      name: "mc coffee",
      rate: 1.8,
      image: "https://media-cdn.tripadvisor.com/media/photo-s/11/2a/32/2f/mac-cafe-chiangmai.jpg",
      lastReview: {
        userId: "187468241241",
        reviewId:"7575757",
        createdAt: "20-07-2021",
        review: "Nice place, low lights, great cakes. Average prices. Would recomend.",
        rate: 5,
      }
    },
  ]
  
  return (
    <>
      <div className={styles.headBackground}></div>
      <div className={styles.presentation}>
        <motion.div
          animate={{y:0, opacity:1}}
          initial={{opacity: 0, y:-100}}
          transition={{duration:.5}}
        >
          <h2>Welcome!</h2>
          <span>Leave a <strong>review</strong> and <strong>rate</strong> <br /> the places where you <br /> <em>enjoy Coffee</em> </span>
        </motion.div>
      </div>
      <div>
        Bueno acá se supone que tengo que poner cosas interesantes
      </div>

      { coffees &&
        <motion.div 
          className={styles.reviews}
          animate={{y:0, opacity:1}}
          initial={{opacity: 0, y:100}}
          transition={{duration:1}}>
          { coffees && coffees.map( coffe => (
            <CoffeCard key={coffe.id} coffe={coffe}/>
          ))}
        </motion.div>
      }
    </>
  )
}

export default Home
