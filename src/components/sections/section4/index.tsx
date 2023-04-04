import React, { forwardRef, useRef } from "react";

import * as S from "./style";

import useScrollTop from "hooks/useScrollTop";

import ConsultingIcon from "./animateIcon/consultingIcon";
import SolutionIcon from "./animateIcon/solutionIcon";
import MonitoringIcon from "./animateIcon/monitoringIcon";
import ServiceIcon from "./animateIcon/serviceIcon";
import Contents from "components/common/contents";
import { TitActive, TitBasic } from "components/common/sectionTit/style";

const Section4 = forwardRef<HTMLElement>((props, ref) => {
  return (
    <S.Section4 ref={ref}>
      <S.CustomSectionTit>
        <TitActive>B</TitActive>
        <TitActive>e</TitActive>
        <TitActive>s</TitActive>
        <TitActive>t</TitActive>
        &nbsp;
        <TitActive>p</TitActive>
        <TitActive>a</TitActive>
        <TitActive>r</TitActive>
        <TitActive>t</TitActive>
        <TitActive>n</TitActive>
        <TitActive>e</TitActive>
        <TitActive>r</TitActive>
        <TitActive>s</TitActive>
        <br />
        {Array.from("How we work").map((text, index) => (
          <TitBasic key={index}>{text}</TitBasic>
        ))}
      </S.CustomSectionTit>
      <S.ContentsList>
        <S.ContentsCtnr>
          <Contents
            index="01"
            tit="Consulting"
            desc={[
              "Strategic Consulting for DEX.",
              "Listing and Pool Formation.",
            ]}
          />
          <S.AnimateIcon>
            <ConsultingIcon />
          </S.AnimateIcon>
        </S.ContentsCtnr>
        <S.ContentsCtnr>
          <Contents
            index="02"
            tit="Customzed Solution"
            desc={[
              "Development and On-boarding of",
              "Liquidity supply tools based",
              "on consulting.",
            ]}
          />
          <S.AnimateIcon>
            <SolutionIcon />
          </S.AnimateIcon>
        </S.ContentsCtnr>
        <S.ContentsCtnr>
          <Contents
            index="03"
            tit="Market Growth Monitoring"
            desc={[
              "Liquidity supply status monitoring,",
              "Market impact alarm provision",
              "& real-time response.",
            ]}
          />
          <S.AnimateIcon>
            <MonitoringIcon />
          </S.AnimateIcon>
        </S.ContentsCtnr>
        <S.ContentsCtnr>
          <Contents
            index="04"
            tit="Follow-up Service"
            desc={["Strategic Consulting", "according to project stage."]}
          />
          <S.AnimateIcon>
            <ServiceIcon />
          </S.AnimateIcon>
        </S.ContentsCtnr>
      </S.ContentsList>
    </S.Section4>
  );
});
export default Section4;
