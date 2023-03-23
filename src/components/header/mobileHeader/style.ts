import styled from "@emotion/styled";

import { COLORS } from "config/styles";

import Nav from "components/common/nav";
import Footer from "components/footer";

export const MobileHeader = styled.header`
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: ${COLORS.grayscale06};
  padding: 0px 24px;
`;

export const Logo = styled.div`
  width: 125px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const NavBtn = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const MobileNav = styled(Nav)`
  position: absolute;
  top: 90px;
  left: 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 90px);
  background-color: rgba(28, 28, 28, 0.95);
  scroll-behavior: unset;

  > ul {
    height: auto;
    flex-direction: column;
    border-bottom: 0px;
    margin: 48px 24px 0px 24px;

    > li {
      border-bottom: 1px solid ${COLORS.grayscale04};
      padding: 32px 0px 24px 24px;
    }
  }
`;

export const CustomFooter = styled(Footer)``;
