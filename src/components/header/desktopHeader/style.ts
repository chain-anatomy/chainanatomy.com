import styled from "@emotion/styled";

import { COLORS } from "config/styles";

import Nav from "components/common/nav";

export const DeskopHeader = styled.header`
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: ${COLORS.grayscale06};
  padding: 0px 112px;
`;

export const Logo = styled.div`
  width: 114px;
  height: 36px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const DesktopNav = styled(Nav)`
  ul {
    height: 100%;
  }

  li {
    margin-left: 80px;
  }
`;
