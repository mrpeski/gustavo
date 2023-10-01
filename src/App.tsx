import React from "react";
import "./App.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import AppLayout from "./components/AppLayout";
import { Affix, Button, Checkbox, Col, Form, Input, Row } from "antd";
import Filters from "./components/Filters";
import CandidateList from "./components/CandidateList";

function App() {
  return (
    <AppLayout>
      <Row>
        <Col flex="385px" style={{ marginRight: 32 }}>
          <Affix offsetTop={32} onChange={(affixed) => console.log(affixed)}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={() => null}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
            </Form>
            <Filters />
          </Affix>
        </Col>
        <Col flex="auto">
          <CandidateList />
        </Col>
      </Row>
    </AppLayout>
  );
}

export default App;
