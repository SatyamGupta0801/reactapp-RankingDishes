import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dishes from "./Dishes.json";
import Tabs from './Tabs';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

export default function(props) {
  const navigate = useNavigate();
  const [selecteddishes, setselecteddishes] = useState(
    new Array()
  );
  const handleonchange=(dishid)=>{
    selecteddishes.push(dishid);
    setselecteddishes(selecteddishes);
  }
  function voteDishes()
  {
    return(navigate("/ShowRanks",{state:{selecteddishes:selecteddishes}}));
  }
  return (
    <>
      <Tabs></Tabs>
      <br></br>
      <div className="form-check">
      <p>Please Select the dishes and click on below button to Vote : </p>
      <button type="button" onClick={voteDishes} className="btn btn-primary">Vote For Dishes</button>
      {dishes.map((dish, i) => (
            <div className="card">
              <div className="card-body">
                <input class="form-check-input" type="checkbox" 
                  value={dish.id} id={i} 
                  onChange={event =>handleonchange(event.target.value)}>
                </input>
                <img src={dish.image} alt="sorry, Can't display image"></img>
                <p className="card-text">
                  <b>{dish.id} - {dish.dishName}</b> - {dish.description} 
                </p>
              </div>
            </div>
      ))}
      </div>
    </>
  );
}
