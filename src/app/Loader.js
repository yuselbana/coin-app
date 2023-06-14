import styles from './Loader.module.css'
import { HashLoader } from 'react-spinners';
import { motion } from 'framer-motion';
const Loader = () => {
    return (  
        <div className={styles.loader}>
   <HashLoader color="#E6C0E9" size={100} />
   <motion.h1
    initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1,delay:0.75}}
   >Fetching coin data...</motion.h1>
        </div>
 
    )
}

export default Loader;