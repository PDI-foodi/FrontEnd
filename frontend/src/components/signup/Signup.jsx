import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [nickname, setNickname] = useState("");

    const [nicknameCount, setNicknameCount] = useState(0);
    const [passwordMessage, setPasswordMessage] = useState("");
    const [messageClass, setMessageClass] = useState("password-mismatch");
    const [signupAvailable, setSignupAvailable] = useState(false);

    const navigator = useNavigate();

    const signupHandling = () => {
        const signupData = async () => {
            const response = await axios.post("/users/signup", {
                id: id,
                password: password,
                nickname: nickname,
            });
            if (response.status === 201) {
                console.log("회원가입 성공!");
                navigator(`/`);
            } else {
                alert("회원가입에 실패했습니다.");
            }
        }
        if (id === "") {
            alert("아이디를 입력해주세요.");
        }
        else if (password === "") {
            alert("비밀번호를 입력해주세요.");
        }
        else if (nickname === "") {
            alert("닉네임을 입력해주세요.");
        }
        else if (messageClass === "password-mismatch") {
            alert("비밀번호가 일치하지 않습니다.");
        }
        else {
            signupData();
        }
        
    };

    const checkPassword = () => {
        if (password === "" || passwordCheck === "") {
            setPasswordMessage("");
            setMessageClass("");
        } else if (password === passwordCheck) {
            setPasswordMessage("비밀번호가 일치합니다!");
            setMessageClass("password-match");
        } else {
            setPasswordMessage("비밀번호가 다릅니다!");
            setMessageClass("password-mismatch");
        }
    }

    const handleNicknameChange = (event) => {
        const newNickname = event.target.value;
        if (newNickname.length <= 10) {
            setNickname(newNickname);
            setNicknameCount(newNickname.length);
        }
    };

    useEffect(() => {
        const checkSignupConditions = () => {
            if (id !== "" && password !== "" && passwordCheck !== "" && nickname !== "" && messageClass === "password-match") {
                setSignupAvailable(true);
            } else {
                setSignupAvailable(false);
            }
        };

        checkSignupConditions();
    }, [id, password, passwordCheck, nickname, messageClass]);

    return (
        <div className="signup-body">
            <div className="signup-comment">
                <h1>프디푸디에 오신 것을 환영합니다!</h1>
                <p>회원가입하고</p>
                <p>맛집 정보를 얻어보세요!</p>
            </div>
            <div className="signup-input">
                <div className="signup-id">
                    <label for="id">아이디</label>
                    <input
                        type="text"
                        placeholder="pdazzang"
                        name="id"
                        value={id}
                        onChange={(e) => {
                            setId(e.target.value)
                        }}
                    />
                </div>
                <div className="signup-pwd">
                    <label for="password">비밀번호</label>
                    <input
                        type="password"
                        placeholder="********"
                        name="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        onBlur={()=>checkPassword()}
                    />
                </div>
                <div className="signup-pwd-check">
                    <div>
                        <label for="passwordCheck">비밀번호 확인</label>
                        <input
                        type="password"
                        placeholder="********"
                        name="passwordCheck"
                        value={passwordCheck}
                        onChange={(e) => {
                            setPasswordCheck(e.target.value)
                        }}
                        onBlur={()=>checkPassword()}
                    />
                    </div>
                    <div className={`password-message ${messageClass}`}>{passwordMessage}</div>
                    
                </div>
                <div className="signup-nickname">
                    <div>
                        <label for="nickname">닉네임</label>
                        <input
                        type="text"
                        placeholder="프디아짱"
                        name="nickname"
                        value={nickname}
                        onChange={(e) => {
                            handleNicknameChange(e)
                        }}
                        />
                    </div>
                    <div className="nickname-count">{nicknameCount}/10</div>
                </div>
                
            </div>
            <button type="button" className="btn btn-primary" onClick={signupHandling} disabled={signupAvailable === false}>
                    회원가입하기
            </button>
        </div>
    );
}

export default Signup;