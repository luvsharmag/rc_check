import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Maincontent from "./components/main1/Maincontent";
import Mainsecond from "./components/main2/Mainsecond";
import MainThird from "./components/main3/MainThird";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div >
      <Navbar/>

      <Header/>
      <Maincontent/>
      <Mainsecond/>
      <MainThird/>
      <Footer/>
      
    </div>
  );
}

export default App;
