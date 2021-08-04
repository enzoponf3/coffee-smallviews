import * as React from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { SubmitHandler, useForm } from "react-hook-form"

import logo from "~/assets/icons/logo.svg"
import coffeDust from "~/assets/images/coffee-dust.png"
import coffeTrace from "~/assets/images/coffee-trace.png"
import searchIcon from "~/assets/icons/search_black_24dp.svg"
import styles from "./Home.module.scss"
import CoffeCard from "~/App/components/coffee/CoffeCard"
import Review from "../Review"

const Home: React.FC = () => {
  
  const [selectedCoffe, setSelectedCofee] = React.useState<string>("")

  const coffees = [
    {
      id: "17645157",
      name: "the shelter coffee",
      rate: 7.3, 
      image: "https://www.lacafeteguia.com/wp-content/uploads/2018/04/salon-The-Shelter-Foto-La-Cafeteguia-580x387.jpg",
      prices:3
    },
    {
      id: "2134",
      name: "starbucks",
      rate: 2.6, 
      image: "https://www.unicenter.com.ar/files/get/801",
      prices:3
    },
    {
      id: "21344",
      name: "cafe martinez",
      rate: 4.8, 
      image: "https://www.cronista.com/files/image/289/289823/5ffe0068af6af.jpg",
      prices:4
    },
    {
      id: "123",
      name: "mc coffee",
      rate: 1.8,
      image: "https://media-cdn.tripadvisor.com/media/photo-s/11/2a/32/2f/mac-cafe-chiangmai.jpg",
      prices:2
    },
  ]
  
  interface IFormInput {
    coffeeName: string;
  }

  const { register, handleSubmit } = useForm()
  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data)
  }

  return (
    <>
      <Helmet>
        <title>Coffee Smallview</title>
        <meta name="description" content="Home page, see coffee shops and them scores of the community"/>
      </Helmet>
      <div className={styles.headBackground}>
        {/* <img className={styles.logo} src={logo} alt="" />
        <div className={styles.stripes}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.circles}>
          <div></div>
          <div></div>
        </div>*/}
        <img src={coffeDust} alt="coffee dust" />
        <img src={coffeTrace} alt="coffee trace" />
      </div> 
      <div className={styles.presentation}>
        <div className={styles.presentationBack}>
          <h2>Look out the best coffee shops.</h2>
          <div className={styles.searchBox}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder="Search" {...register("coffeName")}/>
              <button type="submit">
                <i><img src={searchIcon} alt="search" /></i>
              </button>
              <input type="submit" hidden />
            </form>
          </div>
        </div>
      </div>

      { coffees &&
        <motion.div 
          className={styles.reviews}
          animate={{y:0, opacity:1}}
          initial={{opacity: 0, y:100}}
          transition={{duration:1}}>
          { coffees && coffees.map( coffe => (
            <CoffeCard selectCoffee={()=> setSelectedCofee(coffe.id)} key={coffe.id} coffee={coffe}/>
          ))}
        </motion.div>
      }
      <Review closeReview={() => setSelectedCofee("")} coffeeId={selectedCoffe}/>
    </>
  )
}

export default Home
