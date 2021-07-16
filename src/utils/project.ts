import { useEffect } from "react";
import { cleanObject } from "./index";
import { Project } from "../screens/project-list/list";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useProjects = (param?:Partial<Project>) =>{
  const client = useHttp()
  const {run,...result} = useAsync<Project[]>()
  useEffect(() => {
    run(
      client("projects", { data: cleanObject(param||{})})
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);
  
  return result
}