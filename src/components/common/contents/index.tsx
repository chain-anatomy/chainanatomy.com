import React, { HTMLAttributes } from "react";

import * as S from "./style";

import ContentsDesc from "./contenstDesc";
import ContentsTit from "./contentsTit";

interface Props extends HTMLAttributes<HTMLDivElement> {
  index: string;
  tit: string;
  desc: string[];
}

const Contents: React.FC<Props> = ({ index, tit, desc, ...props }) => {
  return (
    <S.Contents {...props}>
      <S.Index>{index}</S.Index>
      <S.TextCtnr>
        <ContentsTit>{tit}</ContentsTit>
        <ContentsDesc>
          {desc.map((row, index) => {
            return (
              <p key={row + index}>
                {row}
                {row.length !== index && <br />}
              </p>
            );
          })}
        </ContentsDesc>
      </S.TextCtnr>
    </S.Contents>
  );
};

interface Props {}

export default Contents;
