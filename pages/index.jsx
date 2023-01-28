import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/Hero/Hero';

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <h1>Trip Valley</h1>
        <a href="https://deoxy.dev">Click Me!</a>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>
    </>
  )
}
