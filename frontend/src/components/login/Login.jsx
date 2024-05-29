import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  const loginHandling = async () => {
    const LoginData = async () => {
      try {
        const response = await axios.post("/users/login", {
          id: id,
          password: password,
        });
        if (response.status === 200) {
          console.log("로그인 성공!");
          document.cookie = `authToken=${response.data.authToken}; path=/; max-age=3600;`;
          navigator(`/main`);
        } else {
          alert("로그인에 실패했습니다.");
        }
      } catch (error) {
        alert("로그인에 실패했습니다.");
        console.error("로그인 실패: ", error);
      }
    };

    LoginData();
  };

  return (
    <div className="login">
      <div>
        <p>아이디</p>
        <input
          type="text"
          placeholder="pdazzang"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <p>비밀번호</p>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="button" class="btn btn-primary" onClick={loginHandling}>
        로그인
      </button>
    </div>
  );
}

export default Login;
