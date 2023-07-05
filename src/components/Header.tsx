import React from "react";
import styled from "styled-components";
import oc from "open-color";

const Wrapper = styled.div`
  /* 레이아웃 */
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
  top: 0px;
  z-index: 5;

  /* 색상 */
  background: ${oc.indigo[5]};
  color: white;
  border-bottom: 1px solid ${oc.indigo[6]};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.2);

  /* 폰트 */
  font-size: 2.5rem;
  font-family: "Do Hyeon", sans-serif;
`;

const Header = () => <Wrapper>변명 제조기</Wrapper>;

export default Header;
