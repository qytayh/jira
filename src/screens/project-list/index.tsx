import React from "react";
import { useState } from "react";
import { useDebounce } from "../../utils";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "../../utils/project";
import { useUsers } from "../../utils/user";

export const ProjectListScreen = () => {
  // const [list, setList] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const paramdebounce = useDebounce(param, 2000);
  const {isLoading,error,data:list} = useProjects(paramdebounce)
  const {data:users} = useUsers()
  

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users||[]} />
      {error?<Typography.Text type='danger'>{error.message}</Typography.Text>:null}
      <List loading={isLoading} dataSource={list||[]} users={users||[]} />
    </Container>
  );
};


const Container = styled.div`
  padding: 3.2rem;
`