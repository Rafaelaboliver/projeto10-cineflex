import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import MoviesPage from "../pages/MoviesPage";
import MovieSessionPage from "../pages/MovieSessionPage";
import SeatSelectionPage from "../pages/SeatSelectionPage";
import CheckoutPage from "../pages/CheckoutPage";
import { useState } from "react";


export default function App() {
const [sucessInfo, setSucessInfo] = useState({})

    return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route  path='/' element={<MoviesPage/>}/>
            <Route  path='/sessoes/:idFilme' element={<MovieSessionPage/>}/>
            <Route  path='/assentos/:idSessao' element={<SeatSelectionPage setSucessInfo={setSucessInfo}/>}/>
            <Route  path='/sucesso' element={<CheckoutPage sucessInfo={sucessInfo} />}/>
          </Routes>
        </BrowserRouter>
      )
 
}
