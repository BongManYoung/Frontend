import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface IChatWrapper {
  isMyChat: boolean;
}

export const ChatWrapper = styled.div<IChatWrapper>`
  width: 80%;
  margin-top: 1rem;
  margin-left: 1rem;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0 1rem;

  ${(props) =>
    props.isMyChat &&
    css`
      background-color: #6b1aee;
      color: #f2f2f2;
    `}
`;
