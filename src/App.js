import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Calc1 from './comp/calc/study01'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/calc"} element={<Calc1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function About() {
  return(
    <div>
      <h1>About</h1>
      <Link to="/">Home으로 이동</Link>
    </div>
  )
}

function Home() {
  return(
    <div>
      <h1>Start Home</h1>
      <Link to="/about">About으로 이동</Link>
      <Link to="/calc">Calc로 이동</Link>
    </div>
  )
}




export default App;
