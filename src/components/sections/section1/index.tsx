import React, { forwardRef, useEffect } from "react";

import * as S from "./style";

import { swupTransitions } from "../../../cursor/swup";
import { utils } from "../../../cursor/utils";

import useScrollTop from "hooks/useScrollTop";

import TouchBtn from "components/common/touchBtn";
import MediaBr from "components/common/mobileBr";
import { TitActive, TitBasic } from "components/common/sectionTit/style";

interface Props {
  handleClickTouchBtn: VoidFunction;
}

const Section1 = forwardRef<HTMLElement, Props>(
  ({ handleClickTouchBtn }, ref) => {
    const { scrollTop } = useScrollTop(ref as React.RefObject<HTMLElement>, 0);

    const cursorsEmitter = async () => {
      await utils();
      swupTransitions();
    };

    useEffect(() => {
      cursorsEmitter();
    }, []);

    return (
      <S.Section1Ctnr ref={ref}>
        <S.Swup id="swup">
          <S.CursorWrapper role="main">
            <S.CursorCtnr
              className="cursor-container"
              id="cursor-1"
            ></S.CursorCtnr>
            <S.Contents>
              <S.CustomSectionTit active={scrollTop <= 0}>
                <TitBasic>B</TitBasic>
                <TitBasic>l</TitBasic>
                <TitBasic>o</TitBasic>
                <TitBasic>c</TitBasic>
                <TitBasic>k</TitBasic>
                <TitBasic>c</TitBasic>
                <TitBasic>h</TitBasic>
                <TitBasic>a</TitBasic>
                <TitBasic>i</TitBasic>
                <TitBasic>n</TitBasic>
                &nbsp;
                <MediaBr media="mobile" />
                <TitBasic>V</TitBasic>
                <TitBasic>a</TitBasic>
                <TitBasic>n</TitBasic>
                <TitBasic>g</TitBasic>
                <TitBasic>u</TitBasic>
                <TitBasic>a</TitBasic>
                <TitBasic>r</TitBasic>
                <TitBasic>d</TitBasic>
                <br />
                <TitActive>B</TitActive>
                <TitActive>e</TitActive>
                <TitActive>s</TitActive>
                <TitActive>t</TitActive>
                &nbsp;
                <TitActive>G</TitActive>
                <TitActive>u</TitActive>
                <TitActive>i</TitActive>
                <TitActive>d</TitActive>
                <TitActive>a</TitActive>
                <TitActive>n</TitActive>
                <TitActive>c</TitActive>
                <TitActive>e</TitActive>
                &nbsp;
                <MediaBr media="tablet" />
                <TitBasic>f</TitBasic>
                <TitBasic>o</TitBasic>
                <TitBasic>r</TitBasic>
                &nbsp;
                <TitBasic>W</TitBasic>
                <TitBasic>e</TitBasic>
                <TitBasic>b</TitBasic>
                <TitBasic>3</TitBasic>
                <TitBasic>.</TitBasic>
                <TitBasic>0</TitBasic>
              </S.CustomSectionTit>
              <S.SubTit>
                Leading Blockchain
                <br />
                Technology Company In South Korea
              </S.SubTit>
              <S.Mission>
                Our Mission Is To Connect Ideas To Web 3.0.
                <br />
                And By Doing So, We Bring A Surprise To The World
              </S.Mission>
              <S.TouchBtnCtnr>
                <TouchBtn onClick={handleClickTouchBtn} />
              </S.TouchBtnCtnr>
            </S.Contents>
          </S.CursorWrapper>
        </S.Swup>
      </S.Section1Ctnr>
    );
  }
);

export default Section1;
