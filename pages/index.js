import Head from 'next/head'
import Soguma from '../components/soguma'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Soguma</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="flex justify-center items-center bg-blue-300 h-screen w-full">
        {/* <Soguma/> */}
        <Soguma/>

      </main>

      <footer className="">

      </footer>
    </div>
  )
}
