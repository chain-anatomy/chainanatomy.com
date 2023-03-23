import React, { HTMLAttributes } from "react";

import * as S from "./style";

interface Props extends HTMLAttributes<HTMLElement> {
  category: string[];
  selectCategory: string;
  setSelectCategory: (text: string) => void;
}
export const TabBar: React.FC<Props> = ({
  setSelectCategory,
  selectCategory,
  category,
  ...props
}) => (
  <S.TabBarContainer
    {...props}
    value={selectCategory}
    onChange={(e, newValue) => setSelectCategory(newValue)}
    variant={"scrollable"}
    scrollButtons={false}
  >
    {category.map((i, index) => (
      <S.TabItem
        key={i + index}
        value={i}
        label={<S.TabText isSelect={selectCategory === i}> {i} </S.TabText>}
        disableRipple
      />
    ))}
  </S.TabBarContainer>
);
