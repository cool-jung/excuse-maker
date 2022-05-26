import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 80px; /* 헤더 높이 */
`;

const Layout = ({ children }) => <Wrapper>{children}</Wrapper>;

Layout.Main = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 1200px;
  position: relative;
`;

export default Layout;
