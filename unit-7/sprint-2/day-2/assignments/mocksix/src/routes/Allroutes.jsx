import React from 'react';
import {Routes,Route} from "react-router-dom";
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';
import Pokemondel from '../pages/Pokemondel';
import Types from '../pages/Types';

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/pokemon" element={<Pokemon/>}></Route>
            <Route path="/pokemon/:name" element={<Pokemondel/>}></Route>
            <Route path="/types" element={<Types/>}></Route>
            {/* <Route path="/types/:id" element={<Pokemondel/>}></Route> */}
            <Route path="/favorites" element={<Favorites/>}></Route>
            {/* <Route path="/favorites/:id" element={<Pokemondel/>}></Route> */}
            
        </Routes>
    </div>
  )
}

export default Allroutes