import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ReactComponent as Logo } from "Assets/MYD_Logo.svg";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { postJoin } from "utils/api/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastError, ToastSuccess } from "Hook/toastHook";

const Join = () => {
  const navigate = useNavigate();
  const [buttonColor, setButtonColor] = useState<boolean>(false);
  const [emailBor, setEmailBor] = useState<boolean>(false);
  const [passwordBor, setPasswordBor] = useState<boolean>(false);
  const [passwordCheckBor, setPasswordCheckBor] = useState<boolean>(false);
  const [inputs, setInputs] = useState({
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  const { nickname, password, passwordCheck } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e: any, nickname: string, password: string) => {
    e.preventDefault();

    postJoin(nickname, password)
      .then(() => {
        navigate("/login");
        ToastSuccess("회원가입에 성공하였습니다.");
      })
      .catch(() => ToastError("회원가입에 실패하였습니다."));
  };

  useEffect(() => {
    nickname.length >= 2 ? setEmailBor(true) : setEmailBor(false);
    password.length >= 4 ? setPasswordBor(true) : setPasswordBor(false);
    passwordCheck.length >= 4
      ? setPasswordCheckBor(true)
      : setPasswordCheckBor(false);
    passwordCheck && password ? setButtonColor(true) : setButtonColor(false);
  }, [nickname.length, password, passwordCheck]);

  return (
    <>
      <ToastContainer />
      <S.Wrapper>
        <S.LoginWrapper onSubmit={(e) => onSubmit(e, nickname, password)}>
          <Logo onClick={() => navigate("/")} />
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
            <div className="input-item-wrap">
              <input
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                name="passwordCheck"
                value={passwordCheck}
                onChange={(e) => onChange(e)}
                style={{
                  borderBottom: passwordCheckBor
                    ? `2px solid #5271FF`
                    : `2px solid #c4c4c4`,
                }}
              />
            </div>
          </S.InputWrapper>
          <button
            style={
              buttonColor
                ? { background: "#5271ff" }
                : { background: "#c7c7c7" }
            }
          >
            Sign
          </button>
          <p>
            이미 회원이신가요? <Link to="/login">로그인</Link>
          </p>
        </S.LoginWrapper>
      </S.Wrapper>
    </>
  );
};

export default Join;
