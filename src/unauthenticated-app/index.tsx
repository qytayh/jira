import React, { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";

export const UnauthenticatedApp = () => {
  const [isregister, setIsRegister] = useState(false);
  return (
    <div>
      {isregister ? <RegisterScreen /> : <LoginScreen />}
      <button onClick={() => setIsRegister(!isregister)}>
        切换到{isregister ? "登录" : "注册"}
      </button>
    </div>
  );
};
