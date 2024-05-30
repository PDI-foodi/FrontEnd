import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FindPwd.css";

function FindPwd() {
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [findAvailable, setFindAvailable] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const findPwdHandling = () => {
    const findPwdData = async () => {
      try {
        const response = await axios.post("/users/find-pwd", {
          id: id,
          nickname: nickname,
        });
        console.log(response.data);
        if (response.status === 200) {
          setModalOpen(true);
        } else {
          alert("비밀번호 찾기에 실패했습니다.");
        }
      } catch (error) {
        if (error.response.status === 404) {
          alert("아이디를 확인해주세요.");
        } else if (error.response.status === 400) {
          alert("닉네임을 확인해주세요.");
        } else {
          alert("비밀번호 찾기에 실패했습니다.");
        }
        console.error("비밀번호 찾기 실패: ", error);
      }
    };

    findPwdData();
  };

  useEffect(() => {
    const checkConditions = () => {
      if (id !== "" && nickname !== "") {
        setFindAvailable(true);
      } else {
        setFindAvailable(false);
      }
    };

    checkConditions();
  }, [id, nickname]);

  return (
    <div className="find-pwd-body">
      <div className="find-pwd-comment">
        <h1>비밀번호를 잊어버리셨나요?</h1>
        <p>아이디와 닉네임을 입력해주세요!</p>
      </div>
      <div className="find-pwd-input">
        <div>
          <label for="id">아이디</label>
          <input
            type="text"
            placeholder="pdazzang"
            name="id"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label for="nickname">닉네임</label>
          <input
            type="text"
            placeholder="프디아짱"
            name="nickname"
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={findPwdHandling}
        disabled={findAvailable === false}
      >
        비밀번호찾기
      </button>
      {modalOpen && (
        <PasswordResetModal
          close={() => setModalOpen(false)}
          id={id}
          nickname={nickname}
        />
      )}
    </div>
  );
}

function PasswordResetModal({ close, id, nickname }) {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const navigator = useNavigate();

  const resetPassword = async () => {
    const resetData = async () => {
      try {
        const response = await axios.put("/users/reset-pwd", {
          id: id,
          password: newPassword,
        });
        if (response.status === 200) {
          alert("비밀번호가 성공적으로 변경되었습니다.");
          navigator(`/`);
        } else {
          alert("비밀번호 변경에 실패했습니다.");
        }
      } catch (error) {
        alert("비밀번호 변경에 실패했습니다.");
        console.error("비밀번호 변경 실패: ", error);
      }
    };

    resetData();
  };

  useEffect(() => {
    if (newPassword === "" || newPasswordCheck === "") {
      setPasswordMatch("");
      setPasswordMessage("");
    } else if (newPassword === newPasswordCheck) {
      setPasswordMatch("password-match");
      setPasswordMessage("비밀번호가 일치합니다!");
    } else {
      setPasswordMatch("password-mismatch");
      setPasswordMessage("비밀번호가 다릅니다!");
    }
  }, [newPassword, newPasswordCheck]);

  return (
    <div className="find-pwd-modal-background">
      <div className="find-pwd-modal-content">
        <div className="find-pwd-modal-header">
          <p>{nickname}님!</p>
          <p>비밀번호를 재설정해주세요!</p>
        </div>
        <div className="find-pwd-modal-body">
          <div>
            <label for="newPassword">새 비밀번호</label>
            <input
              type="password"
              placeholder="********"
              name="newPassword"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="find-pwd-password-check">
            <label for="newPasswordCheck">새 비밀번호 확인</label>
            <input
              type="password"
              placeholder="********"
              name="newPasswordCheck"
              onChange={(e) => setNewPasswordCheck(e.target.value)}
            />
            <div className={`password-message ${passwordMatch}`}>
              {passwordMessage}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={resetPassword}
          disabled={passwordMatch !== "password-match"}
        >
          비밀번호 변경
        </button>
      </div>
    </div>
  );
}

export default FindPwd;
