// import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from "./components/Header.jsx"


function App() {

  return (
    
    <>
     <Header></Header>
     <main>
      <Outlet></Outlet>
     </main>
    </>
  )
}

export default App
