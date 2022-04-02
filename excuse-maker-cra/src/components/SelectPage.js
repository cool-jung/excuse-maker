import React from "react";
import {Link} from "react-router-dom";

function SelectPage(){
    

    function copyToClipBoard(){
        const content = document.getElementById('excuseText').innerHTML;
    
        navigator.clipboard.writeText(content)
            .then(() => {
            console.log("Text copied to clipboard...")
        })
            .catch(err => {
            console.log('Something went wrong', err);
        })
    }

    return(
        <div>
            <h1 id="excuseText">변명</h1>
            <button>다시 선택</button>
            <button onClick={copyToClipBoard}>변명 확정</button>
            <p><Link to="../category">뒤로가기</Link></p>
        </div>
    );
}

export default SelectPage;
