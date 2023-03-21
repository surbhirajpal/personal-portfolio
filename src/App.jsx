
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from './generalComponents/ScrollToTop';

import Header from './Header';
import Footer from './Footer';

import Home from './Home';
import About from './About';
import Works from './Works';
import Resume from './Resume';

import './App.less';

const App = () => {
  return (
    <main className='portfolio'>
      <div className='portfolio-container'>
        <BrowserRouter>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Works />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
