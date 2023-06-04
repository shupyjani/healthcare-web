import React from 'react';
import './App.css';
import './index';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import SignUp from './components/Pages/SignUp';



import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>

      <Navbar />
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>

    </Routes>




    </>

  );
}

export default App;
