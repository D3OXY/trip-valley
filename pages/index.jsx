import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import { Container } from 'react-bootstrap';
import TwoCardRow from '../components/Card';
import WhatsAppIcon from '../components/WhatsAppIcon';
import Resort from '../components/Resorts/Resort';
const cards = [
  {
    title: 'Card title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
  },
  {
    title: 'Card title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
  },
]

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Container>
          <About />
          <Resort />
          {/* <TwoCardRow cards={cards} /> */}
        </Container>
        <WhatsAppIcon />
      </div>
    </>
  )
}
