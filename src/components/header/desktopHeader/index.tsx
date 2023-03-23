import React from "react";

import * as S from "./style";

import { HasNavProps } from "..";

import { ReactComponent as LogoImg } from "assets/images/common/logo.svg";

const DesktopHeader: React.FC<HasNavProps> = ({ navList }) => {
  return (
    <S.DeskopHeader>
      <S.Logo>
        <LogoImg />
      </S.Logo>
      <S.DesktopNav navList={navList} />
    </S.DeskopHeader>
  );
};

export default DesktopHeader;
