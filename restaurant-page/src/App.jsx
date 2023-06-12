import './App.css'
import Header from '../src/components/header/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView } from './views/home/HomeView';
import { RerserveView } from './views/reserve/RerserveView';
import { AboutView } from './views/about/AboutView';

function App() {


  return (
   <>
  <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/reserve' element={<RerserveView />} />
          <Route path='/' element={<HomeView />} />
          <Route path='/about' element={<AboutView />} />
      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App

