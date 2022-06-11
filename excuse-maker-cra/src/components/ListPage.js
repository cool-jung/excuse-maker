import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "./Api.js";
import { Row, Col } from "antd";
import CreateSentence from "./CreateSentence.js";
import { Divider, List, Button } from "antd";

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

function LiRender({ list, onRemove, onEdit, name }) {
  return (
    <ul style={{ width: "500px" }}>
      {list.map((value, index) => (
        <List
          key={list[index].id}
          size="large"
          // bordered
          style={{ marginBottom: "20px", paddingBottom: "9px" }}
        >
          <span>{value.body}</span>

          <Button
            onClick={() => onRemove(list[index].id, name)}
            type="primary"
            danger
            style={{ float: "right" }}
          >
            삭제
          </Button>
          <Button
            onClick={() => onEdit(list[index].id, name)}
            style={{ float: "right", marginRight: "10px" }}
          >
            수정
          </Button>
        </List>
      ))}
    </ul>
  );
}

function ListPage() {
  const { selected } = useParams();
  console.log("url", selected);
  const [timeExcuseList, setTimeExcuseList] = useState([]);
  const [scheduleText, setScheduleText] = useState([]);
  const TIME = "time";
  const SCHEDULE = "schedule";

  // 변명리스트
  useEffect(() => {
    (async () => {
      const apiUrl = `http://localhost:4000`;
      const excuseTime = `${apiUrl}/${TIME}`;
      const excuseSchedule = `${apiUrl}/${SCHEDULE}`;

      const timeList = await Api.get(excuseTime);
      const scheduleList = await Api.get(excuseSchedule);

      setTimeExcuseList(timeList);
      setScheduleText(scheduleList);
    })();
  }, []);

  // 변명생성

  const [input, setInput] = useState("");

  const onChange = (e) => {
    console.log("인풋상태", input);
    return setInput(e.target.value);
  };

  const onCreate = async (optionSelected = "time") => {
    const newList = await Api.post(optionSelected, { body: input });
    console.log("셀렉트", optionSelected);
    if (TIME === optionSelected) {
      setTimeExcuseList(newList);
    } else {
      setScheduleText(newList);
    }
    console.log(newList);
  };

  //변명 수정
  const onEdit = async (id, optionSelected = "time") => {
    const editVal = prompt("수정할 변명을 입력해주세요.", "");
    await Api.put(`http://localhost:4000/${optionSelected}/${id}`, {
      body: editVal,
    });
    const apiUrl = `http://localhost:4000`;
    const excuseTime = `${apiUrl}/${TIME}`;
    const excuseSchedule = `${apiUrl}/${SCHEDULE}`;

    const timeList = await Api.get(excuseTime);
    const scheduleList = await Api.get(excuseSchedule);

    setTimeExcuseList(timeList);
    setScheduleText(scheduleList);
  };

  // 시간 변명 삭제
  const onRemoveTime = async (id, name) => {
    if (window.confirm("삭제하시겠습니까?")) {
      await Api.delete(`http://localhost:4000/time/${id}`);
      const apiUrl = `http://localhost:4000`;
      const excuseTime = `${apiUrl}/${TIME}`;
      const timeList = await Api.get(excuseTime);
      setTimeExcuseList(timeList);
    }
  };

  // 일정 변명 삭제
  const onRemoveSchedule = async (id, name) => {
    if (window.confirm("삭제하시겠습니까?")) {
      await Api.delete(`http://localhost:4000/schedule/${id}`);
      const apiUrl = `http://localhost:4000`;
      const excuseSchedule = `${apiUrl}/${SCHEDULE}`;
      const scheduleList = await Api.get(excuseSchedule);
      setScheduleText(scheduleList);
    }
  };

  return (
    <div>
      <ColStyle className="alignCenter" style={{ height: "100px" }}>
        <CreateSentence onChange={onChange} onCreate={onCreate} />
        <Row
          className="alignSpaceAround"
          align="middle"
          style={{ width: "50%", margin: "0 auto" }}
        >
          <ColStyle>
            <Divider orientation="left">시간</Divider>
            <LiRender
              list={timeExcuseList}
              onRemove={onRemoveTime}
              onEdit={onEdit}
              style={{ width: "500px" }}
              name="time"
            />
          </ColStyle>
          <ColStyle>
            <Divider orientation="left">일정</Divider>
            <LiRender
              list={scheduleText}
              onRemove={onRemoveSchedule}
              onEdit={onEdit}
              name="schedule"
            />
          </ColStyle>
        </Row>
      </ColStyle>
    </div>
  );
}

export default ListPage;
