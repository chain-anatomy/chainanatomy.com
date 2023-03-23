import styled from "@emotion/styled";

import { COLORS } from "config/styles";

export const Nav = styled.nav`
  height: 100%;

  > ul {
    display: flex;
    height: 100%;
    border-bottom: 1px solid ${COLORS.grayscale04};
  }
`;

export interface NavLiProps {
  isActive: boolean;
}

export const NavLi = styled.li<NavLiProps>`
  position: relative;
  display: flex;
  align-items: center;
  /* font-weight: ${({ isActive }) => (isActive ? 700 : 400)}; */
  color: ${({ isActive }) =>
    isActive ? COLORS.grayscale01 : COLORS.grayscale03};
  padding: 0px 12px;
  cursor: pointer;

  &:first-of-type {
    margin-left: 0px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: calc(0% - 1px);
    left: 0%;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ isActive }) => isActive && COLORS.grayscale01};
  }
`;
