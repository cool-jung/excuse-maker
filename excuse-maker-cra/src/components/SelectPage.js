import React,{ useState, useEffect, useCallback } from "react";
import {Link, useParams} from "react-router-dom";
import data from "../db/data.json";
import { Row, Col} from 'antd';
import { Button } from 'antd';
import{RedoOutlined,CopyOutlined,SwapLeftOutlined} from '@ant-design/icons'

function colStyle({span,offset,value}){
    return(
        <Col span={span} offset={offset} value={value}>
            <div style={{display:"flex",flexDirection: "column",alignItems: "center"}}/>
        </Col>
    );
}

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
        <Row justify="center" align="middle" style={{height:700}}>
            <Col span={16}>
                <colStyle className="alignCenter" style={{justifyContent:"space-between",height:"200px"}}>
                    <h1 style={{textAlign:"center"}}>{excuseText}</h1>
                    <Row type="flex" justify="space-around" style={{width:"70%"}}>
                    <colStyle value={120} span={8} offset={5}>
                            <Button type="primary" onClick={reselect}><RedoOutlined />다시 선택</Button>
                    </colStyle>
                    <colStyle value={120} span={8}>
                            <Button type="primary" onClick={copyToClipBoard}><CopyOutlined />변명 확정</Button>
                    </colStyle>
                    </Row>
                    <p style={{paddingTop:"20px"}}><Link to="../category"><SwapLeftOutlined />뒤로가기</Link></p>
                </colStyle>
            </Col>
        </Row>
    );
}

export default SelectPage;
