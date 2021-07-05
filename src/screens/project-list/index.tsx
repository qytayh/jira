import React from "react";
import { useState, useEffect } from "react";
import { cleanObject, useMount, useDebounce } from "../../utils";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useHttp } from "../../utils/http";

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
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
