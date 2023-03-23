import React, { useRef } from "react";

import * as S from "./style";

import useScrollTop from "hooks/useScrollTop";

import MediaBr from "components/common/mobileBr";
import { TitActive, TitBasic } from "components/common/sectionTit/style";

import Near from "assets/images/section3/near.png";
import Gsr from "assets/images/section3/gsr.png";
import Dwflabs from "assets/images/section3/dwflabs.png";
import Everscale from "assets/images/section3/everscale.png";
import Docking from "assets/images/section3/docking.png";
import Proximitylabs from "assets/images/section3/proximitylabs.png";
import Secta9ine from "assets/images/section3/secta9ine.png";
import Spc from "assets/images/section3/spc.png";

const Section3 = () => {
  const section3Ref = useRef<HTMLDivElement>(null);
  const { scrollTop } = useScrollTop(section3Ref, 0);

  return (
    <S.Section3 ref={section3Ref}>
      <S.Section3Ctnr>
        <S.CustomSectionTit>
          <TitBasic>B</TitBasic>
          <TitBasic>e</TitBasic>
          <TitBasic>s</TitBasic>
          <TitBasic>t</TitBasic>
          &nbsp;
          <TitBasic>p</TitBasic>
          <TitBasic>a</TitBasic>
          <TitBasic>r</TitBasic>
          <TitBasic>t</TitBasic>
          <TitBasic>n</TitBasic>
          <TitBasic>e</TitBasic>
          <TitBasic>r</TitBasic>
          <TitBasic>s</TitBasic>
          <br />
          <TitActive>W</TitActive>
          <TitActive>h</TitActive>
          <TitActive>o</TitActive>
          &nbsp;
          <TitActive>w</TitActive>
          <TitActive>e</TitActive>
          &nbsp;
          <MediaBr media="tablet" />
          <TitActive>c</TitActive>
          <TitActive>o</TitActive>
          <TitActive>o</TitActive>
          <TitActive>p</TitActive>
          <TitActive>e</TitActive>
          <TitActive>r</TitActive>
          <TitActive>a</TitActive>
          <TitActive>t</TitActive>
          <TitActive>e</TitActive>
          &nbsp;
          <TitActive>w</TitActive>
          <TitActive>i</TitActive>
          <TitActive>t</TitActive>
          <TitActive>h</TitActive>
        </S.CustomSectionTit>
        <S.Cooperate>
          <S.ImgCtnr>
            <S.CooperateImg src={Near} alt="Near" />
          </S.ImgCtnr>
          <S.ImgCtnr>
            <S.CooperateImg src={Gsr} alt="Gsr" />
          </S.ImgCtnr>
          <S.ImgCtnr>
            <S.CooperateImg src={Dwflabs} alt="Dwflabs" />
          </S.ImgCtnr>
          <S.ImgCtnr>
            <S.CooperateImg src={Everscale} alt="Everscale" />
          </S.ImgCtnr>
          <S.ImgCtnr>
            <S.CooperateImg src={Docking} alt="Docking" />
          </S.ImgCtnr>
          <S.ImgCtnr>
            <S.CooperateImg src={Proximitylabs} alt="Proximity labs" />
          </S.ImgCtnr>
          <S.ImgCtnr>
            <S.CooperateImg src={Secta9ine} alt="Secta9ine" />
          </S.ImgCtnr>
          <S.ImgCtnr>
            <S.CooperateImg src={Spc} alt="Spc" />
          </S.ImgCtnr>
        </S.Cooperate>
      </S.Section3Ctnr>
    </S.Section3>
  );
};

export default Section3;
