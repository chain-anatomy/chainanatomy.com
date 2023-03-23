import React, { forwardRef } from "react";

import * as S from "./style";

import Desc from "./desc";
import Enhance from "./enhance";
import Strategy from "./strategy";

const Section2 = forwardRef<HTMLElement>((props, ref) => {
  return (
    <S.Section2 ref={ref}>
      <S.SectionCtnr>
        <Enhance />
        <Desc />
        <Strategy />
      </S.SectionCtnr>
    </S.Section2>
  );
});

export default Section2;
