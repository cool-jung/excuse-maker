import React from "react";
import {Link} from "react-router-dom";
import data from "../db/data.json";

function CategoryPage(){
    function randomValueExcuseArray(){
        const random = Math.floor(Math.random() * 10);
        
        const excuseText = document.querySelector("#excuseText").innerHTML=data.time[random];
        // return console.log(excuseText);
        return console.log(data.time[random]);

    }
    
    
    return(
        <div>
            <ul>
                <li><button onClick={randomValueExcuseArray}><Link to="../select">시간 약속</Link></button></li>
                <li><button><Link to="../select">일정 약속</Link></button></li>
            </ul>
        </div>
    );
}

export default CategoryPage;
