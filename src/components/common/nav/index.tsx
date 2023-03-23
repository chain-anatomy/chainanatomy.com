import React, { HTMLAttributes, ReactNode } from "react";

import * as S from "./style";

import { useRecoilValue } from "recoil";
import { sectionAtom } from "../../../recoil/section";

import { HasNavProps } from "components/header";

interface Props extends HTMLAttributes<HTMLElement>, HasNavProps {
  children?: ReactNode;
  handleClick?: VoidFunction;
}

const Nav: React.FC<Props> = ({ navList, children, handleClick, ...props }) => {
  return (
    <S.Nav {...props}>
      <ul>
        {navList.map((nav, index) => (
          <NavLi
            key={index}
            nav={nav}
            index={index}
            handleClick={handleClick}
          />
        ))}
      </ul>
      {children}
    </S.Nav>
  );
};

export default Nav;

interface NavLiProps {
  index: number;
  nav: {
    title: string;
    ref: React.RefObject<HTMLDivElement>;
  };
  handleClick?: VoidFunction;
}

const NavLi: React.FC<NavLiProps> = ({
  index,
  nav: { title, ref },
  handleClick: hideNav,
}) => {
  const section = useRecoilValue(sectionAtom);
  const handleClick = (index: number, ref: React.RefObject<HTMLDivElement>) => {
    hideNav && hideNav();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <S.NavLi
      isActive={section === index}
      onClick={() => handleClick(index, ref)}
    >
      {title}
    </S.NavLi>
  );
};
