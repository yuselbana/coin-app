import styles from './About.module.css'
import hero from '/public/bitcoin-animate.svg'
import hero2 from '/public/bitcoin-animate2.svg'
import Image from 'next/image'
import AboutComponent from './AboutComponent'
import * as Unicons from '@iconscout/react-unicons';
const About = ()=> {
    return (
        <div  className={styles.about_container}>
    <h1 id="About">Why Us</h1>
  
        <div className={styles.about_grid}>
 
            <AboutComponent title="Real-Time Market Data" content="Our crypto price tracker provides real-time market data, allowing you to stay updated with the latest prices, trends, 
                and trading volumes across various cryptocurrencies." icon={<Unicons.UilComparison size="40" color="#E6C0E9"/>}/>
            <AboutComponent title="Portfolio Management" content="Easily manage and track your cryptocurrency portfolio in one place.
             Monitor the performance of your investments, view profit/loss, and track individual coin prices." icon={<Unicons.UilFolderOpen  size="40" color="#E6C0E9"/>}/>
             <AboutComponent title="Security and Privacy" content=" Connect with a community of crypto enthusiasts, share insights, and discuss market trends.
          Engage in conversations, ask questions, and learn from others' experiences. " icon={<Unicons.UilLockAccess  size="40" color="#E6C0E9"/>}/>
         
        <div className={styles.hero}>
        <Image alt="Woman floating with bitcoins around her" height={500} width={500} src={hero2}/>
        </div>

            <AboutComponent title="User-Friendly Interface" content="Enjoy a user-friendly and intuitive interface designed for both beginners and experienced cryptocurrency enthusiasts.
            Easily navigate through different features and find the information you need without hassle." icon={<Unicons.UilKid size="40" color="#E6C0E9"/>}/>
            <AboutComponent title="Community and Social Features" content="Connect with a community of crypto enthusiasts, share insights, and discuss market trends. 
            Engage in conversations, ask questions, and learn from others' experiences." icon={<Unicons.UilUsersAlt size="40" color="#E6C0E9"/>}/>
            <AboutComponent title="Mobile Access" content="Access the crypto price tracker on the go with mobile applications for iOS and Android devices.
             Stay connected to the market and manage your portfolio from anywhere, anytime." icon={<Unicons.UilMobileVibrate size="40" color="#E6C0E9"/>}/>
           
    
        </div>
        </div>
    )
}
export default About