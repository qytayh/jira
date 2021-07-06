import { Card } from "antd";
import React, { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";

export const UnauthenticatedApp = () => {
  const [isregister, setIsRegister] = useState(false);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        {isregister ? <RegisterScreen /> : <LoginScreen />}
        <button onClick={() => setIsRegister(!isregister)}>
          切换到{isregister ? "登录" : "注册"}
        </button>
      </Card>
    </div>
  );
};
