import React, { useEffect, useRef, useState } from "react";

import * as S from "./style";

import useScrollTop from "hooks/useScrollTop";

import { TitBasic } from "components/common/sectionTit/style";

import BgImg from "assets/images/section5/bg.png";

const Section5 = () => {
  const ContentsUlRef = useRef<HTMLUListElement>(null);
  const { scrollTop } = useScrollTop(ContentsUlRef, 1080);
  const windowHeight = window.innerHeight;

  const [startAnimation1, setStartAnimation1] = useState(false);
  const [startAnimation2, setStartAnimation2] = useState(false);
  const [startAnimation3, setStartAnimation3] = useState(false);
  const [startAnimation4, setStartAnimation4] = useState(false);

  useEffect(() => {
    if (windowHeight - 100 >= scrollTop) {
      setStartAnimation1(true);

      setTimeout(() => {
        setStartAnimation2(true);
      }, 300);
      setTimeout(() => {
        setStartAnimation3(true);
      }, 600);
      setTimeout(() => {
        setStartAnimation4(true);
      }, 900);
    }
  }, [scrollTop]);

  return (
    <S.Section5>
      <S.BgImg>
        <img src={BgImg} alt="Donut structure" />
      </S.BgImg>
      <S.Process>
        <S.CustomSectionTit>
          <TitBasic>P</TitBasic>
          <TitBasic>r</TitBasic>
          <TitBasic>o</TitBasic>
          <TitBasic>c</TitBasic>
          <TitBasic>e</TitBasic>
          <TitBasic>s</TitBasic>
          <TitBasic>s</TitBasic>
        </S.CustomSectionTit>
        <S.ContentsUl ref={ContentsUlRef}>
          <S.ContentsLi startLi={startAnimation1}>
            <S.CustomContents
              index="01"
              tit="Request"
              desc={[
                "Strategic Consulting",
                "for WEB3.0 Project Building",
              ]}
            />
          </S.ContentsLi>
          <S.ContentsLi startLi={startAnimation2}>
            <S.CustomContents
              index="02"
              tit="Meeting"
              desc={["Identifying Client Needs and Project Condition"]}
            />
          </S.ContentsLi>
          <S.ContentsLi startLi={startAnimation3}>
            <S.CustomContents
              index="03"
              tit="Consulting"
              desc={[
                "Provide strategic consulting for",
                "clients needs and status",
              ]}
            />
          </S.ContentsLi>
          <S.ContentsLi startLi={startAnimation4}>
            <S.CustomContents
              index="04"
              tit="Service Providing"
              desc={["Optimize services that fit on project"]}
            />
          </S.ContentsLi>
        </S.ContentsUl>
      </S.Process>
    </S.Section5>
  );
};

export default Section5;
