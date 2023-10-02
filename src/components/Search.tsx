import { Form, Input } from "antd";
import React from "react";
import { InfoIcon, SearchIcon } from "./icons";

const Search = () => {
    return <Form
    name="normal_login"
    className="login-form"
    initialValues={{ remember: true }}
    onFinish={() => null}
  >
    <Form.Item
      name="username"
    >
      <Input
        size="large"
        prefix={<SearchIcon />}
        suffix={<InfoIcon />}
        placeholder="Serach by name, edu, exp or #tag"
      />
    </Form.Item>
  </Form>
}

export default Search