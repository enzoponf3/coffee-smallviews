import * as React from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { SubmitHandler, useForm } from "react-hook-form"

import coffeDust from "~/assets/images/coffee-dust.png"
import coffeTrace from "~/assets/images/coffee-trace.png"
import searchIcon from "~/assets/icons/search_black_24dp.svg"
import styles from "./Home.module.scss"

import CoffeeCard from "~/App/components/coffeeShop/CoffeeCard"
import { CoffeeShop } from "~/App/components/coffeeShop/types"
import coffeeShopApi from "~/App/components/coffeeShop/api"

const Home: React.FC = () => {

  const [printCoffees, setPrintCoffees] = React.useState<CoffeeShop[]>([])

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
    coffeeShopApi.getByName(data.coffeeName)
      .then(coffees => setPrintCoffees(coffees))
  }

  return (
    <>
      <Helmet>
        <title>Coffee Smallview</title>
        <meta name="description" content="Look out coffee shops and them scores of the community. Help other to find the bests coffee shops in the world."/>
      </Helmet> 
      <div className={styles.headBackground}>
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
          { printCoffees && printCoffees.map( coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee}/>
          ))}
        </motion.div>
      }
    </>
  )
}

export default Home
