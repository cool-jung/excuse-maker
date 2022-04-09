import React from "react";
import {Link} from "react-router-dom";


function CategoryPage(){
    
    return(
        <div>
            <ul>
                <li><button><Link to="../select/time">시간 약속</Link></button></li>
                <li><button><Link to="../select/schedule">일정 약속</Link></button></li>
            </ul>
        </div>
    );
}

export default CategoryPage;
