import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Package from '../components/Packages/Package';
import Resort from '../components/Resorts/Resort';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container>
        <About />
        <Resort />
        <Package />
      </Container>
      <Footer />
      <WhatsAppIcon />
    </>
  )
}
