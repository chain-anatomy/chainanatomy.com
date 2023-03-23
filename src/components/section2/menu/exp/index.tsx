import React, { HTMLAttributes } from "react";

import * as S from "./style";

interface Props extends HTMLAttributes<HTMLDivElement> {
  tit: string[];
  desc?: { index: string; desc: string }[];
  type?: "row" | "column";
}

const Exp: React.FC<Props> = ({ tit, desc, type = "row", ...props }) => {
  return (
    <S.Exp {...props}>
      <S.Arrow />
      <S.TextCtnr>
        <S.Tit>
          {tit.map((line, index) => (
            <div key={index}>
              {line}
              <br />
            </div>
          ))}
        </S.Tit>
        <S.DescCtnr type={type}>
          {desc?.map(({ index, desc }) => (
            <div key={index}>
              <span>{index}</span>
              <S.Desc type={type}>
                {desc.split("\n").map((line) => (
                  <div key={index + line}>
                    {line}
                    <br />
                  </div>
                ))}
              </S.Desc>
            </div>
          ))}
        </S.DescCtnr>
      </S.TextCtnr>
    </S.Exp>
  );
};

export default Exp;
