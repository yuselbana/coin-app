import styles from './Join.module.css'
import roller from '/public/rollercoaster.svg'
import Image from 'next/image'
import bitcoin from '/public/bitcoin.png'
import eth from '/public/eth.png'
import { motion } from 'framer-motion'
const Join = () => {
    return (
   

     


          <div id="Join" className={styles.main}>
             
        <motion.div
        initial={{y:0}}
        animate={{y:100}}
        transition= {{ 
        repeat:Infinity,
        repeatType:'reverse',
        duration:1}}
        className={styles.coin}
                >
                     <Image alt={"Bitcoin Floating"} className={styles.btc} height={125} width={125} src={bitcoin}></Image>
        </motion.div>

    <div className={styles.center_content}>
     <section>
     <h1>  JOIN US ON  </h1>
      <h1 className={styles.purp}>DISCORD & TWITTER</h1>
     </section>
    <section className={styles.buttons}>
    <motion.button
    whileHover={{scale:1.2}}
    >Discord</motion.button>
        <motion.button
        whileHover={{scale:1.2}}
        >Twitter</motion.button>
    </section>
       <a href="https://storyset.com/work">Work illustrations by storyset</a>
    </div>
   



        <motion.div
         initial={{y:0}}
        animate={{y:100}}
        transition= {{ repeat:Infinity,
        repeatType:'reverse',duration:1}}
        className={styles.coin}
         >
         <Image alt={"Ethereum Floating"} className={styles.eth}   height={125} width={75} src={eth}></Image>
        </motion.div>
     
          </div>


   
    )
}
export default Join;