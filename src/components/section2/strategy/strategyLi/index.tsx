import React, { ReactNode, useEffect, useRef, useState } from "react";
import gsap from "gsap";

import * as S from "./style";

import { media } from "utils";

import { ReactComponent as ArrowImg } from "assets/images/section2/inactive-arrow.svg";
import { ReactComponent as Close } from "assets/images/section2/close.svg";

interface Props {
  handleClick: VoidFunction;
  icon: ReactNode;
  tit1: string;
  tit2: string;
  open: boolean;
}

const StrategyLi: React.FC<Props> = ({
  handleClick,
  icon,
  tit1,
  tit2,
  open,
}) => {
  const [mouseOver, setMouseOver] = useState(false);
  const liRef = useRef(null);
  const t1 = useRef<any>();

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  const onMouseOver = () => {
    t1.current.play();
  };

  const onMouseOut = () => {
    t1.current.reverse();
  };

  useEffect(() => {
    t1.current = gsap.timeline();

    t1.current.to(liRef.current, { duration: 0.3, width: 480 });
  }, []);

  useEffect(() => {
    if (mouseOver && media() === "desktop") {
      onMouseOver();
      return;
    }
    onMouseOut();
  }, [mouseOver]);

  return (
    <S.StrategyLi
      onClick={handleClick}
      ref={liRef}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <S.IconCtnr>
        <S.Arrow hover={mouseOver} open={open}>
          {open ? <Close /> : <ArrowImg />}
        </S.Arrow>
        <S.Icon>{icon}</S.Icon>
      </S.IconCtnr>
      <S.Title open={open}>
        {tit1}
        <br />
        {tit2}
      </S.Title>
    </S.StrategyLi>
  );
};

export default StrategyLi;
