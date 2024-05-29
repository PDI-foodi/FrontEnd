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
          document.cookie = `authToken=${response.data.authToken};`;
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
        <label for="id">아이디</label>
        <input
          type="text"
          placeholder="pdazzang"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <label for="password">비밀번호</label>
        <input
          type="password"
          placeholder="********"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="find-pwd">
        <p onClick={()=>navigator(`/find-pwd`)}>비밀번호찾기</p>
      </div>
      <button type="button" className="btn btn-primary" onClick={loginHandling}>
        로그인
      </button>
      <p className="btn-signup" onClick={()=>navigator(`/signup`)}>회원가입하기</p>
    </div>
  );
}

export default Login;
