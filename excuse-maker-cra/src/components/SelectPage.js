import React,{ useState, useEffect, useCallback } from "react";
import {Link, useParams} from "react-router-dom";
import data from "../db/data.json";

function SelectPage(){
    const {selected} = useParams();
    console.log(selected);
    const [excuseText,setExcuseText] = useState();

    useEffect(()=>{
        setExcuseText(randomValueExcuseArray(selected));
    },[]);
    
    function randomValueExcuseArray(selected){
        const random = Math.floor(Math.random() * 10);
        
        return data[selected][random];

    }

    const reselect = useCallback(() => {
        setExcuseText(randomValueExcuseArray(selected));
    },[excuseText]);

    function copyToClipBoard(){
    
        navigator.clipboard.writeText(excuseText)
            .then(() => {
            console.log("Text copied to clipboard...")
        })
            .catch(err => {
            console.log('Something went wrong', err);
        })
    }

    return(
        <div>
            <h1>{excuseText}</h1>
            <button onClick={reselect} >다시 선택</button>
            <button onClick={copyToClipBoard}>변명 확정</button>
            <p><Link to="../category">뒤로가기</Link></p>
        </div>
    );
}

export default SelectPage;
