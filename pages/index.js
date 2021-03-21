import Head from 'next/head'
import Soguma from '../components/soguma'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-blue-300 h-screen w-full">
      <Head>
        <title>Soguma</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
        <Soguma/>
    </div>
  )
}
