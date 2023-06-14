import styles from './Header.module.css'
import { useState,useEffect } from 'react';
import Image from 'next/image';
import { motion,animate } from "framer-motion";
import bitcoin from '/public/bitcoin.png'
import eth from '/public/eth.png'



const Header = (props) => {
    const [coin,setCoins] = useState(Array(4));

 
    useEffect(() => {
        setCoins((props.coins).slice(0,4))
    }, [props.coins]);    
    return (
        <motion.div className={styles.header}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1,delay:0.75}}
        >
   <motion.div
   
    initial={{y:0}}
         animate={{y:20}}
         transition= {{ 
          repeat:Infinity,
             repeatType:'reverse',
                duration:1}}
                        >
                        <Image alt={"Bitcoin Floating"} className={styles.btc} height={125} width={125} src={bitcoin}></Image>
    </motion.div>
     
          <section className={styles.column}>

          <section className={styles.title}>
          <h1>TRACK AND MONITOR</h1>
            <h1>DIGITAL CURRENCIES</h1>
          </section>


           <div className={styles.coin_row}>
           {coin.map((c,index) => 
            <div className={styles.hero_coins} key={index}>
                <Image alt={c.name} width={90} height={90} src={c.image}></Image>
              <section className={styles.row}>
              <span>{c.name}</span>
                <span style={c.price_change_percentage_24h > 0 ? {color:"#39FF14"} : {color:'#FF3131'}}>{Math.round(c.price_change_percentage_24h %10)}%</span>
              </section>
   
            <h3>${(c.current_price).toLocaleString('en-US')}</h3>
            </div>
        
            )}
           </div>


          </section>


          <motion.div
             initial={{y:0}}
         animate={{y:20}}
         transition= {{ repeat:Infinity,
      repeatType:'reverse',duration:1}}
      ><Image alt={"Ethereum Floating"} className={styles.eth}  height={125} width={75} src={eth}></Image></motion.div>
        </motion.div>
    )
}
export default Header;