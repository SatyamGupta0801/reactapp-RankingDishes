import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Tabs from './Tabs';
import {useLocation} from 'react-router-dom';
import dishes from "./Dishes.json";
import { render } from "@testing-library/react";

export default function (props) {
    const location = useLocation();
    const selecteddishes=location.state.selecteddishes;
    function displayRankDishes(dish)
    {
        render(
            <div className="card">
            <div className="card-body">
                <img src={dish.image} alt="sorry, Can't display image"></img>
                <p className="card-text">
                <b>{dish.dishName} </b>
                </p>
            </div>
            </div>
        );
    }
    return (
        <>
        <Tabs></Tabs>
        <div>
        {
            selecteddishes.map((dishId, i) => 
            {
                    dishes.map((dish, i) => 
                        {
                            if(dish.id==dishId)
                            {
                                displayRankDishes(dish);
                            }
                        }
                    )
            } ) 
        }
      </div>
      </>
    )
 }
