// import { useState } from 'react';
import './App.css';
import './styles/font-loading.css';
import './styles/lazy-routes.css';
import { Outlet } from 'react-router-dom';
import Header from "./components/Header.jsx"
import Footer from "@/components/Footer"

function App() {

  return (
    
    <>
     <Header />
     <main>
      <Outlet />
     </main>
      <Footer />
    </>
  )
}

export default App
