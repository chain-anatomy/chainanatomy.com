import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import * as S from "./style";

import { media } from "utils";

import { ReactComponent as ArrowImg } from "assets/images/common/arrow.svg";

interface Props {
  tit: string[];
  desc: string[];
}

const EnhanceLi: React.FC<Props> = ({ tit, desc }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const liRef = useRef(null);
  const IconRef = useRef(null);
  const t1 = useRef<any>();
  const t2 = useRef<any>();

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  const onMouseOver = () => {
    t1.current.play();
    t2.current.play();
  };

  const onMouseOut = () => {
    t1.current.reverse();
    t2.current.reverse();
  };

  useEffect(() => {
    t1.current = gsap.timeline();
    t2.current = gsap.timeline();

    t1.current.to(liRef.current, { duration: 0.3, width: 379 });
    t2.current.to(IconRef.current, { duration: 0.3, rotate: 90 });
  }, []);

  useEffect(() => {
    if (mouseOver && media() === "desktop") {
      onMouseOver();
      return;
    }
    onMouseOut();
  }, [mouseOver]);

  return (
    <S.EnhanceLi
      ref={liRef}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <S.Management>
        <div>
          {tit.map((line, index) => (
            <div key={index}>
              {line}
              <br />
            </div>
          ))}
        </div>
        <S.ArrowBtn ref={IconRef}>
          <ArrowImg />
        </S.ArrowBtn>
      </S.Management>
      <S.ListTit>
        {desc.map((line, index) => (
          <div key={index}>
            {line}
            <br />
          </div>
        ))}
      </S.ListTit>
    </S.EnhanceLi>
  );
};

export default EnhanceLi;
