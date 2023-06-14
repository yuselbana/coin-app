import Image from "next/image";
import styles from './CoinList.module.css'
import { motion } from "framer-motion";
const CoinList = (props) => {
    return (
            <div className={styles.list_container}>
              <section className={styles.title}>
        <h3>Coin</h3>
        <h3>Price</h3>
        <h3>24h Change</h3>
        <h3>Market Cap</h3>
        </section>
            {props.coins.map((coin,index) => 
                <motion.div className={styles.coin_row} key={index}
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:1,delay:0.5}}
                >
                
                  <span className={styles.span}><Image alt={coin.name} width={50} height={50 } src={coin.image}></Image> {coin.name}</span>

                <h3> ${(coin.current_price).toLocaleString('en-us')}</h3>
                <h3 style={coin.price_change_percentage_24h > 0 ? {color:"green"} : {color:'red'}}>{Math.round(coin.price_change_percentage_24h %10)}%</h3>
                <h3>${(coin.market_cap).toLocaleString('en-US')}</h3>
                </motion.div>)}
            </div>
    )
}
export default CoinList;