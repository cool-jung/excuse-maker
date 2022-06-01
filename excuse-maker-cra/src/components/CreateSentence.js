import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Api from "./Api.js";
import { Button, Form, Select, Input } from "antd";
const { Option } = Select;

function CreateSentence({ onCreate, onChange, value, inputRef }) {
  return (
    <Form
      className="alignSpaceAround"
      style={{
        alignItems: "center",
        height: "200px",
        width: "50%",
        margin: "0 auto",
      }}
    >
      <Select
        defaultValue="시간"
        style={{
          width: 120,
        }}
      >
        <Option value="time">시간</Option>
        <Option value="schedule">일정</Option>
      </Select>
      <Input
        placeholder="새로운 변명을 입력하세요"
        onChange={onChange}
        value={value}
      />
      <Button type="primary" htmlType="submit" onClick={onCreate}>
        생성
      </Button>
    </Form>
  );
}

export default CreateSentence;