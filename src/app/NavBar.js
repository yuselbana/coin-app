import styles from './NavBar.module.css'
import * as Unicons from '@iconscout/react-unicons';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-scroll/modules";
const NavBar = () => {
    const [bar,setBar] = useState(true)
    return(
        <motion.nav id="Home"  className={styles.navbar_container}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1,delay:0.75}}>
            <div className={styles.navbar}>
            <h3>COINMOON</h3>
        <section className={bar? `${styles.links}` : `${styles.links_after}`}>
        <Link smooth={true} spy={true}  duration={500} to="Home"><h5>Home</h5></Link>
        <Link smooth={true} hashSpy={true} duration={500} to="Market"><h5>Market</h5></Link>
        <Link smooth={true} spy={true} hashSpy={true}  duration={500} to="About"><h5>Why Us</h5></Link>
        <Link smooth={true} spy={true} duration={500} to="Join"><h5>Join</h5></Link>
        </section>

        <section className={styles.icons}>
        <Unicons.UilDiscord color="white" size='30' />
        <Unicons.UilTwitter color="white" size='30'/>
        </section>
            </div>
            <section onClick={()=>{setBar(!bar)}} className={styles.bars}>
            <Unicons.UilBars/>
            </section>
        </motion.nav>
    )
}
export default NavBar;