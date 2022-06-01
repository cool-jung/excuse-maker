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

function ExcuseList(totalExcuseList) {
  return <ul>{totalExcuseList}</ul>;
}

function ListPage() {
  const { selected } = useParams();
  console.log("url", selected);
  const [timeText, setTimeText] = useState();
  const [scheduleText, setScheduleText] = useState();

  useEffect(() => {
    (async () => {
      const apiUrl = `http://localhost:4000`;
      const excuseTime = `${apiUrl}/time`;
      const excuseSchedule = `${apiUrl}/schedule`;

      const timeList = await Api.get(excuseTime);
      const scheduleList = await Api.get(excuseSchedule);

      const totalTimeList = timeList.map((value) => <li>{value.body}</li>);
      const totalScheduleList = scheduleList.map((value) => (
        <li>{value.body}</li>
      ));

      const timeExcuseList = ExcuseList(totalTimeList);
      const scheduleExcuseList = ExcuseList(totalScheduleList);

      return setTimeText(timeExcuseList), setScheduleText(scheduleExcuseList);
    })();
  }, []);

  return (
    <div>
      <ColStyle className="alignCenter" style={{ height: "100px" }}>
        <CreateSentence />
        <Row
          className="alignSpaceAround"
          align="middle"
          style={{ width: "50%", margin: "0 auto" }}
        >
          <ColStyle>
            <h1>시간</h1>
            {timeText}
          </ColStyle>
          <ColStyle>
            <h1>일정</h1>
            {scheduleText}
          </ColStyle>
        </Row>
      </ColStyle>
    </div>
  );
}

export default ListPage;
