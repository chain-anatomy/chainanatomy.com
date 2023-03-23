import { HTMLAttributes, ReactNode, useRef } from "react";

import * as S from "./style";

import useScrollTop from "hooks/useScrollTop";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const AnimationTit: React.FC<Props> = ({ children, ...props }) => {
  const titRef = useRef<HTMLDivElement>(null);
  const { scrollTop } = useScrollTop(titRef, 0);
  const windowHeight = window.innerHeight;

  return (
    <S.AnimationTit
      ref={titRef}
      active={windowHeight - 90 >= scrollTop}
      {...props}
    >
      {children}
    </S.AnimationTit>
  );
};

export default AnimationTit;
