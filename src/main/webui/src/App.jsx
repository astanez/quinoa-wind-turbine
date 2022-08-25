import React from 'react';
import styled from 'styled-components'
import RaceTrack from "./components/RaceTrack";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WindTurbine from './components/WindTurbine';



const Menu = styled.ul`
  list-style-type: none;
  text-align: center;
  a {
    text-decoration: none;
    color: #DB3753;
    font-size: 2rem;
    font-weight: bold;
    
    &:hover {
      color: white;
    }
  }
`

const Power = () => (
    <div>
        <WindTurbine />
    </div>
);

const RacePage = () => (
    <div>
        <RaceTrack />
    </div>
);

const App = () =>  {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/race" element={<RacePage />} />
                <Route path="/" element={<Power />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

