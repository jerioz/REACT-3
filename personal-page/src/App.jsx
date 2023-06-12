
import './App.css'
import Header from './components/header/Header'

import { Contact } from './views/contact/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView } from './views/home/HomeView';
import { AboutView } from './views/about/AboutView';


function App() {


  return (
   <>
  <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<HomeView />} />
          <Route path='/about' element={<AboutView />} />
      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
