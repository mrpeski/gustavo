import React from "react";
import { Row, Col, Affix } from "antd";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Filters from "./components/Filters";
import CandidateList from "./components/CandidateList";
import Search from "./components/Search";
import PageHeader from "./components/PageHeader";

function App() {
  return (
    <AppLayout header={PageHeader}>
      <Row>
        <Col flex="385px" style={{ marginRight: 32 }}>
          <Affix offsetTop={32} onChange={(affixed) => console.log(affixed)}>
            <Search /> 
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
