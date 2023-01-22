import React from "react";
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  InputNumber,
  Typography,
} from "antd";
import { useNavigate } from "react-router-dom";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const { Title, Text } = Typography;

export function LoginForm() {
  const navigate = useNavigate();

  function handleSubmit(values) {
    window.localStorage.setItem("agent", values.username);
    window.localStorage.setItem("desk", values.desk);
    navigate("/desk");
  }

  return (
    <>
      <Title level={2}>Access</Title>
      <Text>Enter your username and desk number</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          width: "100%",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desk"
          name="desk"
          rules={[
            {
              required: true,
              message: "Please input your desk!",
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
