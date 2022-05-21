import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { Button } from "antd";
import "../App.css";

// function ColStyle({span,offset}){
//     return(
//         <Col span={span} offset={offset} >
//             <div style={{display:"flex",flexDirection: "column",alignItems: "center" }}/>
//         </Col>
//     );
// }

function LandingPage() {
  return (
    <Row justify="center" align="middle" style={{ height: 700 }}>
      <Col span={16} className="alignCenter">
        <h1 className="alignCenter">변명시작</h1>
        <Button type="primary">
          <Link to="./category">시작하기</Link>
        </Button>
      </Col>
    </Row>
  );
}

export default LandingPage;
