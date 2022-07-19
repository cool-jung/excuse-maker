import React, { useEffect } from "react";
import Api from "./Api";
import { Row, Col } from "antd";
import SentenceAddForm from "./SentenceAddForm.js";
import { Divider, Button } from "antd";
import { useExcuseList } from "../context/listContext";

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

  // 변명리스트
  useEffect(() => {
    (async () => {
      const excuseTotalList = await Api.getList(name);
      setExcuseList((prev) => {
        return { ...prev, [name]: excuseTotalList };
      });
    })();
  }, []);
  //변명 수정
  const onEdit = async (id, name) => {
    const editVal = prompt("수정할 변명을 입력해주세요.", "");
    await Api.putItem(name, id, {
      body: editVal,
    });
    const excuseTotalList = await Api.getList(name);

    setExcuseList({
      ...excuseList,
      [name]: excuseTotalList,
    });
  };

  //변명 삭제
  const onRemove = async (id, name) => {
    if (window.confirm("삭제하시겠습니까?")) {
      try {
        await Api.deleteItem(name, id);
      } catch (err) {
        console.log(err);
        alert("에러가 발생했습니다 " + err.statusText);
        return;
      }

      const excuseTotalList = await Api.getList(name);

      setExcuseList({
        ...excuseList,
        [name]: excuseTotalList,
      });
    }
  };

  return (
    <ul style={{ width: "500px" }}>
      {excuseList[name]?.map((value, index) => (
        <ListItem
          value={value.body}
          key={index}
          onRemove={() => {
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
