import { useEffect, useState,useLayoutEffect, use, useRef} from "react";  
import Image from "next/image";
import CoinList from "./CoinList";
import styles from './Main.module.css'
import { CSSProperties } from "react";
import { HashLoader } from 'react-spinners';
import { motion } from "framer-motion";

import Header from "./Header";
import NavBar from "./NavBar";
import Loader from "./Loader";
import About from "./About";
import Join from "./Join";

  const Main = () => {

  const ModalNumbers= (props)=> {
      return (
            
   
           <motion.span onClick={handleModalClick}
             whileHover={{scale:1.5, color:"#ffffff"}}
           >{props.number}</motion.span>

   
            
        )
    
   
  }
   
    const [coins,setCoins] = useState([]);
    const [loading,setLoading] = useState(true);
    const [modal,setModal] = useState('');
    const[success,setSuccess] = useState(false);
 
  
    const getCoins = async() => {
    
      if(!success) {
        const staticData = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en', {next:{revalidate:5}});
        const responseJson = await staticData.json();
        setCoins(responseJson);
        setLoading(false);
        if(responseJson) {
          setSuccess(!success)
        }
      }
      
   
   
  
    }
  
    const handleModalClick =(e) => {
      setModal(e.target.innerHTML)
      }


    useEffect(() => {
      setTimeout ( ()=> {
        getCoins();
      }, 5000) 
    });
  const CoinModal = () => {
    if(modal === '' || modal==='1') {
      return (
        <CoinList coins={coins.slice(0,9)}/>
      )
    }else if(modal ==='2') {
      return <CoinList coins={coins.slice(10,19)} />
    }else if(modal ==='3') {
      return <CoinList coins ={coins.slice(20,29)}/>
    }else if(modal ==='4') {
      return <CoinList coins={coins.slice(30,39)}/>
    }else if(modal==='5') {
      return <CoinList coins={coins.slice(40,49)}/>
    }
  } 
  


  


    return (
       <>
        {loading ? <Loader/> : 
        <div className={styles.main}>
        <NavBar/>
        <Header coins={coins}/>
        


       <section className={styles.second_page}>
       <h1 id="Market"  >Market</h1>
      <CoinModal/>
      <section className={styles.modal_numbers}>
        <ModalNumbers number="1"/>
        <ModalNumbers number="2"/>
        <ModalNumbers number="3"/>
        <ModalNumbers number="4"/>
        <ModalNumbers number="5"/>

        </section>
        </section>

        
        <About/>
        <Join/>






       </div>}
      
       </>
    )

  }


  
export default Main;