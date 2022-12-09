import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import MoviesPage from "../pages/MoviesPage";
import MovieSessionPage from "../pages/MovieSessionPage";
import SeatSelectionPage from "../pages/SeatSelectionPage";
import CheckoutPage from "../pages/CheckoutPage";


export default function App() {
    return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route  path='/' element={<MoviesPage/>}/>
            <Route  path='/sessoes/:idFilme' element={<MovieSessionPage/>}/>
            <Route  path='/sessoes/:idSessao' element={<SeatSelectionPage/>}/>
            <Route  path='/sucesso' element={<CheckoutPage/>}/>
          </Routes>
        </BrowserRouter>
      )
 
}
