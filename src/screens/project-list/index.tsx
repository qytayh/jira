import React from "react";
import { useState, useEffect } from "react";
import { cleanObject, useMount, useDebounce } from "../../utils";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useHttp } from "../../utils/http";
import styled from "@emotion/styled";

export const ProjectListScreen = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const client = useHttp();

  const paramdebounce = useDebounce(param, 2000);

  useEffect(() => {
    client("projects", { data: cleanObject(paramdebounce) }).then(setList);
  }, [paramdebounce]);

  useMount(() => client("users").then(setUsers));

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </Container>
  );
};


const Container = styled.div`
  padding: 3.2rem;
`