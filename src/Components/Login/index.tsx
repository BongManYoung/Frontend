import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as S from "./style";

const Login = () => {
  const navigate = useNavigate();
  const [buttonColor, setButtonColor] = useState<boolean>(false);
  const [emailBor, setEmailBor] = useState<boolean>(false);
  const [passwordBor, setPasswordBor] = useState<boolean>(false);
  const [inputs, setInputs] = useState({
    nickname: "",
    password: "",
  });

  const { nickname, password } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    nickname.length >= 2 ? setEmailBor(true) : setEmailBor(false);
    password.length >= 4 ? setPasswordBor(true) : setPasswordBor(false);

    nickname && password ? setButtonColor(true) : setButtonColor(false);
  }, [nickname, nickname.length, password]);

  return (
    <S.Wrapper>
      <S.LoginWrapper>
        <img src="" alt="로고" onClick={() => navigate("/")} />
        <S.InputWrapper>
          <div className="input-item-wrap">
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              name="nickname"
              value={nickname}
              onChange={(e) => onChange(e)}
              style={{
                borderBottom: emailBor
                  ? `2px solid #5271FF`
                  : `2px solid #c4c4c4`,
              }}
            />
          </div>
          <div className="input-item-wrap">
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              style={{
                borderBottom: passwordBor
                  ? `2px solid #5271FF`
                  : `2px solid #c4c4c4`,
              }}
            />
          </div>
        </S.InputWrapper>
        <button
          style={
            buttonColor ? { background: "#5271ff" } : { background: "#c7c7c7" }
          }
        >
          Login
        </button>
      </S.LoginWrapper>
    </S.Wrapper>
  );
};

export default Login;
