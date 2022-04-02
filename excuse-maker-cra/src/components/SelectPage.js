import React from "react";
import {Link} from "react-router-dom";

function SelectPage(){
    return(
        <div>
            <h1>변명</h1>
            <button>다시 선택</button>
            <button>변명 확정</button>
            <p><Link to="../category">뒤로가기</Link></p>
        </div>
    );
}

export default SelectPage;
