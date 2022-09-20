import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import ShowingDishes from './ShowingDishes';

export default function (props) {
    return(
        <ul class="nav nav-pills">
        <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/ShowingDishes">Dishes</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/ShowRanks">Rankings</Link>
        </li>
        </ul>
    );
}