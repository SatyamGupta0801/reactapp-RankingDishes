import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LogIn from './RankDishesComponent/LogIn';
import Tabs from './RankDishesComponent/Tabs';
import reportWebVitals from './reportWebVitals';
import ShowRanks from './RankDishesComponent/ShowRanks';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import ShowingDishes from './RankDishesComponent/ShowingDishes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <h1>RANK DISHES</h1>
        <Routes>
           <Route exact path='/Tabs' element={< Tabs />}></Route>
           <Route path="/" element={< LogIn />}></Route>
           <Route path="/ShowingDishes" element={< ShowingDishes />}></Route>
           <Route path="/ShowRanks" element={< ShowRanks />}></Route>
        </Routes>  
        <LogIn></LogIn>
     </Router> 
    
  </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
