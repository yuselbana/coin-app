'use client';
import Image from 'next/image'
import styles from './page.module.css'
import { useState,useEffect } from 'react';
import Main from './Main';
import Loader from './Loader';
import NavBar from './NavBar';
export default function Home() {
  
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout( ()=> {
        setLoading(false)
    },'')
  }, []);
  return (
    <main className={styles.page}>
     {loading ?<Loader/> : <Main/> }

    </main>
  )
}
