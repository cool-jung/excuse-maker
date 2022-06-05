import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Api from "./Api.js";
import { Row, Col } from "antd";
import CreateSentence from "./CreateSentence.js";

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

function LiRender({ list }) {
  return (
    <ul>
      {list.map((value, index) => (
        <li key={list[index].id}>{value.body}</li>
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
            <h1>시간</h1>
            <LiRender list={timeExcuseList} />
          </ColStyle>
          <ColStyle>
            <h1>일정</h1>
            <LiRender list={scheduleText} />
          </ColStyle>
        </Row>
      </ColStyle>
    </div>
  );
}

export default ListPage;
