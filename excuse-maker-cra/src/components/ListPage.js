import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "./Api.js";
import { Row, Col } from "antd";

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

function ExcuseList({ excuseText }) {
  return (
    <ul>
      <li>{excuseText}</li>
    </ul>
  );
}

function totalValueExcuseArray(list) {
  const totalList = list.map((element, index) => {
    console.log(list[index]);
    return index;
  });
  console.log("토탈", [totalList]);
  return list[totalList];
}
// console.log(totalValueExcuseArray());

function ListPage() {
  const { selected } = useParams();
  console.log("url", selected);
  const [excuseText, setExcuseText] = useState();

  // const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const apiUrl = `http://localhost:4000`;
      const excuseCategory = (selected) => {
        return `${apiUrl}/${selected}`;
      };
      const list = await Api.get(excuseCategory(selected));
      console.log("리스트", list);

      // const randomExcuse = totalValueExcuseArray(list);
      const randomExcuse = list;
      console.log("배열", list);

      console.log("변명출력", randomExcuse);

      return setExcuseText(randomExcuse[0].body);

      // return setExcuseText(list);
    })();
  }, []);

  return (
    <Row justify="center" align="middle" style={{ height: 700 }}>
      <ColStyle
        className="alignCenter"
        style={{ justifyContent: "space-between", height: "200px" }}
      >
        {/* {list.map((excuse) => (
          <ExcuseList excuse={excuse} className="textAlignCenter" />
        ))} */}
        {excuseText}
      </ColStyle>
    </Row>
  );
}

export default ListPage;
