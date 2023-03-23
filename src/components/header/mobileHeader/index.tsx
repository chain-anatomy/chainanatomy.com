import React, { useEffect, useState } from "react";

import * as S from "./style";

import { ReactComponent as LogoImg } from "assets/images/common/logo.svg";
import { ReactComponent as HamburgerMenuImg } from "assets/images/header/hamburger.svg";
import { ReactComponent as CloseMenuImg } from "assets/images/header/close.svg";

import { HasNavProps } from "..";

const MobileHeader: React.FC<HasNavProps> = ({ navList }) => {
  const [isShowNav, setIsShowNav] = useState(false);

  const handleClick = () => {
    setIsShowNav(false);
  };

  useEffect(() => {
    const body = document.querySelector("body") as HTMLElement;
    body.style.overflowY = isShowNav ? "hidden" : "inherit";
  }, [isShowNav]);

  return (
    <S.MobileHeader>
      <S.Logo>
        <LogoImg />
      </S.Logo>
      <S.NavBtn onClick={() => setIsShowNav((prev) => !prev)}>
        {isShowNav ? <CloseMenuImg /> : <HamburgerMenuImg />}
      </S.NavBtn>
      {isShowNav && (
        <S.MobileNav navList={navList} handleClick={handleClick}>
          <S.CustomFooter navList={navList} />
        </S.MobileNav>
      )}
    </S.MobileHeader>
  );
};
export default MobileHeader;
