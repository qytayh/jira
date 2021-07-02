import React from 'react'
import {useState,useEffect} from 'react'
import * as qs from 'qs'
import {cleanObject,useMount}  from '../utils'
import {SearchPanel} from './search-panel'
import {List} from './list'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = ()=>{
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name:'',
    personId:''
  })

  useEffect(()=>{
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res=>{
      if(res.ok){
        setList(await res.json())
      }
    })
  },[param])

  useMount(
    ()=>fetch(`${apiUrl}/users`).then(async res=>{
      if(res.ok){
        setUsers(await res.json())
      }
    })
  )

  return <div>
    <SearchPanel param={param} setParam={setParam} users={users} />
    <List list={list} users={users} />
  </div>
}