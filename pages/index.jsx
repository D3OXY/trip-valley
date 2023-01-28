import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Container>
          <About />
        </Container>
      </div>
    </>
  )
}
