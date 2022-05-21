import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../db/data.json";
import { Row, Col } from "antd";
import { Button } from "antd";
import {
  RedoOutlined,
  CopyOutlined,
  SwapLeftOutlined,
} from "@ant-design/icons";

function ColStyle({ span, offset, value, children }) {
  return (
    <Col span={span} offset={offset} value={value}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      />
      {children}
    </Col>
  );
}

function randomValueExcuseArray(list) {
  const random = Math.floor(Math.random() * 10);

  return list[random];
}

function SelectPage() {
  const { selected } = useParams();

  const [excuseText, setExcuseText] = useState();
  const [timeExcuseList, setTimeExcuseList] = useState();

  const fetchExcuse = async () => {
    const DOMAIN = "http://localhost:4000";
    const response = await fetch(`${DOMAIN}/time`);
    const responseJson = await response.json();

    console.log(responseJson);
    return responseJson;
  };

  // setState 비동기
  // useEffect 역할 네가지
  // cors

  useEffect(() => {
    (async () => {
      const list = await fetchExcuse();
      setTimeExcuseList(list);
      const randomExcuse = randomValueExcuseArray(list);

      console.log(randomExcuse);

      setExcuseText(randomExcuse.body);
    })();
  }, []);

  const onClickReselect = () => {
    const randomExcuse = randomValueExcuseArray(timeExcuseList);

    setExcuseText(randomExcuse.body);
  };

  function copyToClipBoard() {
    navigator.clipboard
      .writeText(excuseText)
      .then(() => {
        console.log("Text copied to clipboard...");
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }

  return (
    <Row justify="center" align="middle" style={{ height: 700 }}>
      <ColStyle
        className="alignCenter"
        style={{ justifyContent: "space-between", height: "200px" }}
      >
        <h1 className="textAlignCenter">{excuseText}</h1>
        <Row type="flex" className="alignSpaceAround textAlignCenter">
          <Button type="primary" onClick={onClickReselect}>
            <RedoOutlined />
            다시 선택
          </Button>
          <Button type="primary" onClick={copyToClipBoard}>
            <CopyOutlined />
            변명 확정
          </Button>
        </Row>
        <p className="textAlignCenter" style={{ paddingTop: "30px" }}>
          <Link to="../category">
            <SwapLeftOutlined />
            뒤로가기
          </Link>
        </p>
      </ColStyle>
    </Row>
  );
}

export default SelectPage;
