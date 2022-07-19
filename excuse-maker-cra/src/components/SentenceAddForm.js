import React, { useState } from "react";
import Api from "./Api";
import { Button, Form, Select, Input } from "antd";
import { useExcuseList } from "../context/listContext";
const { Option } = Select;

function SentenceAddForm({ list }) {
  const { excuseList, setExcuseList } = useExcuseList();
  const [optionSelected, setOptionSelected] = useState(`time`);

  const handleChange = (value) => {
    setOptionSelected(value);
  };

  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e) => {
    const inputVal = e.target.value;
    console.log("인풋상태", inputVal);
    setErrorMessage("");
    if (inputVal.length < 5 || inputVal === "") {
      setErrorMessage("5글자 이상 입력해야 합니다.");
    }
    console.log(errorMessage);
    return setInput(inputVal);
  };

  const onCreate = async (name) => {
    if (input.length < 5) {
      return;
    }
    await Api.postItem(name, { body: input });

    list = await Api.getList(name);
    setExcuseList({
      ...excuseList,
      [name]: list,
    });
  };

  return (
    <>
      <Form
        className="alignSpaceAround"
        style={{
          alignItems: "center",
          paddingTop: "80px",
          width: "50%",
          margin: "0 auto",
        }}
      >
        <Select
          onChange={handleChange}
          defaultValue="time"
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
          onClick={() => {
            onCreate(optionSelected);
          }}
        >
          생성
        </Button>
      </Form>
      <p
        onChange={onChange}
        style={{
          textAlign: "center",
          color: "red",
        }}
      >
        {errorMessage}
      </p>
    </>
  );
}

export default SentenceAddForm;
