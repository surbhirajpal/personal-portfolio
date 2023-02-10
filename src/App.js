
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header';

import Home from './Home';
import About from './About';
import './App.less';

const App = () => {
  return (
    <main className='portfolio'>
      <div className='portfolio-container'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
