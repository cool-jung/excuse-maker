import React, { useState } from "react";
import { Button, Form, Select, Input } from "antd";
const { Option } = Select;

function CreateSentence({ onCreate, onChange, input }) {
  const [optionSelected, setOptionSelected] = useState();

  const handleChange = (value) => {
    setOptionSelected(value);
  };

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
        onChange={handleChange}
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
        value={input}
      />
      <Button
        type="primary"
        htmlType="submit"
        onClick={onCreate.bind(this, optionSelected)}
      >
        생성
      </Button>
    </Form>
  );
}

export default CreateSentence;
