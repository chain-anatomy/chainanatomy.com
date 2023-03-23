import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import gsap from "gsap";

import * as S from "./style";

import { COLORS } from "config/styles";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const TouchBtn: React.FC<Props> = ({ ...props }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const btnRef = useRef(null);
  const arrowRef = useRef(null);
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
    t1.current.to(btnRef.current, { duration: 0.3, translateY: -60 });
  }, []);

  useEffect(() => {
    if (mouseOver) {
      onMouseOver();
      return;
    }
    onMouseOut();
  }, [mouseOver]);

  return (
    <S.TouchBtn
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...props}
    >
      <S.BtnText ref={btnRef}>
        <S.Tit>get in touch</S.Tit>
        <S.HoverTit>get in touch</S.HoverTit>
      </S.BtnText>
      <S.ArrowImgCtnr>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill={COLORS.grayscale06}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="50" height="50" rx="25" fill="#1C1C1E" />
          <path
            d="M32.1597 17.9958L32.1597 29.3953L30.6597 29.3953V20.5565L18.6818 32.5344L17.6211 31.4738L29.599 19.4959L20.7602 19.4959L20.7602 17.9959L32.1597 17.9958Z"
            fill={COLORS.grayscale01}
            ref={arrowRef}
          />
        </svg>
      </S.ArrowImgCtnr>
    </S.TouchBtn>
  );
};

export default TouchBtn;
