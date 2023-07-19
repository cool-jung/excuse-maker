import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../public/db/data.json";
import { Row, Col, Space } from "antd";
import { Button } from "antd";
import {
  RedoOutlined,
  CopyOutlined,
  SwapLeftOutlined,
} from "@ant-design/icons";
import Api, { Item } from "../lib/Api";

type ColStyleProps = {
  span?: string;
  offset?: number;
  value?: number;
  children: React.ReactNode;
};

function ColStyle({ span, offset, children }: ColStyleProps) {
  return (
    <Col span={span} offset={offset}>
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

function randomValueExcuseArray<T>(list: T[]): T {
  const random = Math.floor(Math.random() * 10);

  console.log("랜덤", random);
  return list[random];
}

function SelectPage() {
  const { selected } = useParams();
  const [excuseText, setExcuseText] = useState<string>("");
  const [data, setData] = useState<Item[]>([]);
  const [size, setSize] = useState(50);

  useEffect(() => {
    (async () => {
      if (typeof selected !== "string") {
        throw new Error("error");
      }
      const list = await Api.getList(selected);
      setData(list);
      console.log("배열", list);
      const randomExcuse = randomValueExcuseArray(list);

      console.log("변명출력", randomExcuse);

      return setExcuseText(randomExcuse.body);
    })();
  }, []);

  const onClickReselect = () => {
    const randomExcuse = randomValueExcuseArray(data);

    console.log("다시선택", randomExcuse.body);
    setExcuseText(randomExcuse.body);
  };

  function copyToClipBoard() {
    navigator.clipboard
      .writeText(excuseText || "")
      .then(() => {
        console.log("Text copied to clipboard...");
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }

  return (
    <Row justify="center" align="middle" style={{ height: 700 }}>
      <Col className="alignCenter">
        <h1 className="textAlignCenter">{excuseText}</h1>
        <Space size={size}>
          <Button type="primary" onClick={onClickReselect}>
            <RedoOutlined />
            다시 선택
          </Button>
          <Button type="primary" onClick={copyToClipBoard}>
            <CopyOutlined />
            변명 확정
          </Button>
        </Space>
        <p className="textAlignCenter" style={{ paddingTop: "30px" }}>
          <Link to="../category">
            <SwapLeftOutlined />
            뒤로가기
          </Link>
        </p>
        <Col className="alignCenter">
          <Button>
            <Link to="/excuselist">변명 리스트 보러가기</Link>
          </Button>
        </Col>
      </Col>
    </Row>
  );
}

export default SelectPage;
