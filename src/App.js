
import './App.css';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProDevice from './components/ProDevice';
import ProductGrid from './components/ProductGrid';
import ProductGrid15K from './components/ProductGrid15K';
import QuikProDevice from './components/QuikProDevice';
import QuikProDeviceColors from './components/QuikProDeviceColors';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <ProductGrid />
      <ProDevice />
      <QuikProDevice />
      <QuikProDeviceColors />
      <ProductGrid15K />
      <WhatsAppButton />
      <AboutUs />
    </div>
  );
}

export default App;
