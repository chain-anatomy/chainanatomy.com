import React, { HTMLAttributes, ReactNode, useEffect, useRef } from "react";

import * as S from "./style";

import useScrollTop from "hooks/useScrollTop";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const SectionTit: React.FC<Props> = ({ children, ...props }) => {
  const sectionTitRef = useRef<HTMLDivElement>(null);
  const { scrollTop } = useScrollTop(sectionTitRef, 0);
  const windowHeight = window.innerHeight;

  return (
    <S.SectionTit
      ref={sectionTitRef}
      active={windowHeight - 90 >= scrollTop}
      {...props}
    >
      {children}
    </S.SectionTit>
  );
};

export default SectionTit;
