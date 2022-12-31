
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header';

import Home from './Home';

import './App.less';

const App = () => {
  return (
    <main className='portfolio'>
      <div className='portfolio-container'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
