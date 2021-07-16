import styled from "@emotion/styled";
import React from "react";
import { Row } from "./components/lib";
import { useAuth } from "./context/auth-context";
import { ProjectListScreen } from "./screens/project-list";
import {ReactComponent as SoftWareLogo} from './assets/software-logo.svg'
import { Dropdown, Menu } from "antd";

export const AuthenticatedApp = () => {
  const { logout,user } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftWareLogo width='18rem' color={'rbg(38,132,255)'}></SoftWareLogo>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown overlay={
            <Menu>
              <Menu.Item key={'logout'}>
                <a onClick={logout}>登出</a>
              </Menu.Item>
            </Menu>
          }>
             <a onClick={e => e.preventDefault()}>
               Hi,{user?.name}
             </a>
          </Dropdown>
         
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};



const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  height: 100vh;
`

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
  z-index:1;
`

const HeaderLeft  = styled(Row)``

const HeaderRight  = styled.div``

const Main = styled.main`
`