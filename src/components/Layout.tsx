import React, {FC, ReactNode} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 80px; /* 헤더 높이 */
`;

type LayoutProps = {
  children: ReactNode;
};

//1
//const Layout = (props: LayoutProps) => <Wrapper>{props.children}</Wrapper>;

//2
const Layout: FC<LayoutProps> & {Main:React.ReactNode} = props => <Wrapper>{props.children}</Wrapper>;

Layout.Main = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 1200px;
  position: relative;
`;

export default Layout;
