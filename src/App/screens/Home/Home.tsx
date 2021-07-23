import * as React from "react"

import styles from "./Home.module.scss"

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.headBackground}></div>
      <div className={styles.presentation}>
        <div>
          <h2>Welcome!</h2>
          <span>Leave a <strong>review</strong> and <strong>rate</strong> <br /> the places where you <br /> <em>enjoy Coffee</em> </span>
        </div>
      </div>
      <div className={styles.reviews}>
        <div className={styles.review}>
          <div className={styles.coffeeTitle}>
            <h3>The shelter coffee</h3>
            <div className={styles.lastReview}>
              <div>
                <span>Last Review</span>
                <span>10 - 23 - 2021</span>
              </div>
              <span>Nice place, low lights, great cakes. Average prices. Would recomend.</span>
            </div>
          </div>
          <div className={styles.reviewImage}>
            <img src="src/assets/images/default.jpg" alt="" />
            <div className={styles.score}>
              Score
              <span>
                8.7
                <div></div>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.review}>
          <div className={styles.coffeeTitle}>
            <h3>The shelter coffee</h3>
            <div className={styles.lastReview}>
              <div>
                <span>Last Review</span>
                <span>10 - 23 - 2021</span>
              </div>
              <span>Nice place, low lights, great cakes. Average prices. Would recomend.</span>
            </div>
          </div>
          <div className={styles.reviewImage}>
            <img src="src/assets/images/default.jpg" alt="" />
            <div className={styles.score}>
              Score
              <span>
                8.7
                <div></div>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.review}>
          <div className={styles.coffeeTitle}>
            <h3>The shelter coffee</h3>
            <div className={styles.lastReview}>
              <div>
                <span>Last Review</span>
                <span>10 - 23 - 2021</span>
              </div>
              <span>Nice place, low lights, great cakes. Average prices. Would recomend.</span>
            </div>
          </div>
          <div className={styles.reviewImage}>
            <img src="src/assets/images/default.jpg" alt="" />
            <div className={styles.score}>
              Score
              <span>
                8.7
                <div></div>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.review}>
          <div className={styles.coffeeTitle}>
            <h3>The shelter coffee</h3>
            <div className={styles.lastReview}>
              <div>
                <span>Last Review</span>
                <span>10 - 23 - 2021</span>
              </div>
              <span>Nice place, low lights, great cakes. Average prices. Would recomend.</span>
            </div>
          </div>
          <div className={styles.reviewImage}>
            <img src="src/assets/images/default.jpg" alt="" />
            <div className={styles.score}>
              Score
              <span>
                8.7
                <div></div>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.review}>
          <div className={styles.coffeeTitle}>
            <h3>The shelter coffee</h3>
            <div className={styles.lastReview}>
              <div>
                <span>Last Review</span>
                <span>10 - 23 - 2021</span>
              </div>
              <span>Nice place, low lights, great cakes. Average prices. Would recomend.</span>
            </div>
          </div>
          <div className={styles.reviewImage}>
            <img src="src/assets/images/default.jpg" alt="" />
            <div className={styles.score}>
              Score
              <span>
                8.7
                <div></div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
