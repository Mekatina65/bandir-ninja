import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
   <div>
     <h1 className={styles.title}>Home Page</h1>   
   <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur veniam enim quibusdam consectetur dolores nisi nemo. Sed similique incidunt id!</p>
   <p className={styles.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel quaerat ut! Quo quam, dicta maxime mollitia architecto nesciunt laudantium odit? Cum voluptate voluptas incidunt.</p>
   <Link href="/ninjas">
     <a className={styles.btn}>See Ninja Listing</a>
   </Link>
     </div>
  )
}
