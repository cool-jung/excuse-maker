import React, { useState, useEffect } from "react";
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

function ExcuseList(totalExcuseList) {
  return <ul>{totalExcuseList}</ul>;
}

function ListPage() {
  const { selected } = useParams();
  console.log("url", selected);
  const [timeText, setTimeText] = useState();
  const [scheduleText, setScheduleText] = useState();

  function lastExcuseArray(list) {
    const last = timeText.length;
    console.log("라스트", last);
    return list[last];
  }

  // 변명리스트
  useEffect(() => {
    (async () => {
      const apiUrl = `http://localhost:4000`;
      const excuseTime = `${apiUrl}/time`;
      const excuseSchedule = `${apiUrl}/schedule`;

      const timeList = await Api.get(excuseTime);
      const scheduleList = await Api.get(excuseSchedule);

      const totalTimeList = timeList.map((value, index) => (
        <li key={timeList[index].id}>{value.body}</li>
      ));
      const totalScheduleList = scheduleList.map((value, index) => (
        <li key={scheduleList[index].id}>{value.body}</li>
      ));

      const timeExcuseList = ExcuseList(totalTimeList);
      const scheduleExcuseList = ExcuseList(totalScheduleList);

      return setTimeText(timeExcuseList), setScheduleText(scheduleExcuseList);
    })();
  }, []);

  // 변명생성

  const nextId = useRef(11);

  const [excuseData, setExcuseData] = useState();
  const onChange = (e) => {
    return setExcuseData(e.target.value), setExcuseData(e.target.value);
  };

  const onCreate = (body) => {
    const excuse = {
      id: nextId.current,
      body,
    };
    return setTimeText(timeText.concat(excuse));
  };

  useEffect(() => {
    (async () => {
      const apiUrl = `http://localhost:4000`;
      const excuseCategory = (selected) => {
        return `${apiUrl}/${selected}`;
      };
      const list = await Api.post(excuseCategory(selected));
      const lastExcuse = lastExcuseArray(list);
      console.log(lastExcuse.body);

      return onCreate(lastExcuse.body);
    })();
  }, []);

  return (
    <div>
      <ColStyle className="alignCenter" style={{ height: "100px" }}>
        <CreateSentence
          onChange={onChange}
          // onSubmit={onSubmit}
          // body={body}
          onCreate={onCreate}
        />
        <Row
          className="alignSpaceAround"
          align="middle"
          style={{ width: "50%", margin: "0 auto" }}
        >
          <ColStyle>
            <h1>시간</h1>
            {timeText}
            {excuseData}
          </ColStyle>
          <ColStyle>
            <h1>일정</h1>
            {scheduleText}
            {excuseData}
          </ColStyle>
        </Row>
      </ColStyle>
    </div>
  );
}

export default ListPage;
