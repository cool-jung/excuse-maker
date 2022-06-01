import { Button, Form, Select, Input } from "antd";
const { Option } = Select;

function CreateSentence() {
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
      <Input placeholder="새로운 변명을 입력하세요" />
      <Button type="primary" htmlType="submit">
        생성
      </Button>
    </Form>
  );
}

export default CreateSentence;
