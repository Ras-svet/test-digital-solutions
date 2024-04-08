import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import CardList from '../CardList/CardList';
import cards from '../../utils/cards'
import "./App.css"

function App() {
  return (
    <div className="body">
      <div className="page">
        <Routes>
          <Route exact path="/" element={
            <CardList cards={cards}/>
          } />
        </Routes>
      </div>
    </div>
	)
}

export default App;