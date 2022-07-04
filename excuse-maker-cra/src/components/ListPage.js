import React, { useState, useEffect, useContext } from "react";
import Api from "./Api.js";
import { Row, Col } from "antd";
import SentenceAddForm from "./SentenceAddForm.js";
import { Divider, Button } from "antd";
import { ExcuseListContext, useExcuseList } from "../context/listContext";

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

function LiRender({ name }) {
  const { excuseList, setExcuseList } = useExcuseList();
  const apiUrl = `http://localhost:4000`;
  const URL_SELECTED = (name) => `${apiUrl}/${name}`;
  const URL_DETAIL = (id, name) => `${apiUrl}/${name}/${id}`;

  // 변명리스트
  useEffect(() => {
    (async () => {
      console.log(URL_SELECTED(name));
      const excuseTotalList = await Api.get(URL_SELECTED(name));
      console.log(excuseList);
      console.log(excuseTotalList);
      setExcuseList((prev) => {
        return { ...prev, [name]: excuseTotalList };
      });
    })();
  }, []);
  console.log("네임", name);
  //변명 수정
  const onEdit = async (id, name) => {
    const editVal = prompt("수정할 변명을 입력해주세요.", "");
    await Api.put(URL_DETAIL(id, name), {
      body: editVal,
    });
    const excuseTotalList = await Api.get(URL_SELECTED(name));

    setExcuseList({
      ...excuseList,
      [name]: excuseTotalList,
    });

    console.log(excuseList);
  };

  //변명 삭제
  const onRemove = async (id, name) => {
    if (window.confirm("삭제하시겠습니까?")) {
      try {
        await Api.delete(URL_DETAIL(id, name));
      } catch (err) {
        console.log(err);
        alert("에러가 발생했습니다 " + err.statusText);
        return;
      }

      const excuseTotalList = await Api.get(URL_SELECTED(name));

      setExcuseList({
        ...excuseList,
        [name]: excuseTotalList,
      });
    }
  };

  console.log("테스트", excuseList);
  return (
    <ul style={{ width: "500px" }}>
      {excuseList[name]?.map((value, index) => (
        <ListItem
          value={value.body}
          key={index}
          onRemove={() => {
            console.log(value);

            onRemove(value.id, name);
          }}
          onEdit={() => onEdit(value.id, name)}
        ></ListItem>
      ))}
    </ul>
  );
}

function ListItem({ value, onEdit, onRemove }) {
  return (
    <li size="large" style={{ marginBottom: "20px", paddingBottom: "9px" }}>
      <span>{value}</span>
      <Button
        onClick={() => onRemove()}
        type="primary"
        danger
        style={{ float: "right" }}
      >
        삭제
      </Button>
      <Button
        onClick={() => onEdit()}
        style={{ float: "right", marginRight: "10px" }}
      >
        수정
      </Button>
    </li>
  );
}

function ListPage() {
  return (
    <div>
      <ColStyle className="alignCenter" style={{ height: "100px" }}>
        <SentenceAddForm />
        <Row
          className="alignSpaceAround"
          align="middle"
          style={{ width: "50%", margin: "0 auto" }}
        >
          <ColStyle>
            <Divider orientation="left">시간</Divider>
            <LiRender name="time"></LiRender>
          </ColStyle>
          <ColStyle>
            <Divider orientation="left">일정</Divider>
            <LiRender name="schedule"></LiRender>
          </ColStyle>
        </Row>
      </ColStyle>
    </div>
  );
}

export default ListPage;
