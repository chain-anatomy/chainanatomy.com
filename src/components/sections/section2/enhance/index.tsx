import React from "react";

import * as S from "./style";

import { media } from "utils";

import EnhanceLi from "./enhanceLi";
import { TitActive, TitBasic } from "components/common/sectionTit/style";

import IconImg from "assets/images/section2/icon.png";

const Enhance = () => {
  return (
    <S.Enhance>
      <S.EnhanceCtnr>
        <S.Icon>
          <img src={IconImg} alt="Chain Anatomy icon" />
        </S.Icon>
        <S.EnhnaceContents>
          <S.CustomSectionTit>
            <TitBasic>H</TitBasic>
            <TitBasic>o</TitBasic>
            <TitBasic>w</TitBasic>
            &nbsp;
            <TitBasic>w</TitBasic>
            <TitBasic>e</TitBasic>
            &nbsp;
            <TitBasic>e</TitBasic>
            <TitBasic>n</TitBasic>
            <TitBasic>h</TitBasic>
            <TitBasic>a</TitBasic>
            <TitBasic>n</TitBasic>
            <TitBasic>c</TitBasic>
            <TitBasic>e</TitBasic>
            <br />
            <TitActive>y</TitActive>
            <TitActive>o</TitActive>
            <TitActive>u</TitActive>
            <TitActive>r</TitActive>
            &nbsp;
            <TitActive>p</TitActive>
            <TitActive>r</TitActive>
            <TitActive>o</TitActive>
            <TitActive>j</TitActive>
            <TitActive>e</TitActive>
            <TitActive>c</TitActive>
            <TitActive>t</TitActive>
            <TitActive>s</TitActive>
          </S.CustomSectionTit>
          <S.SubTit>Project Growth Solutions Based On Market Trends</S.SubTit>
          <S.EnhanceUl>
            <EnhanceLi
              tit={
                media() === "tablet"
                  ? ["Potential Loss Risk"]
                  : ["Potential", "Loss Risk", ""]
              }
              desc={
                media() === "tablet"
                  ? ["Potential Risk", "Management"]
                  : ["Potential", "Risk", "Management"]
              }
            />
            <EnhanceLi
              tit={
                media() === "tablet"
                  ? ["Unsteady Liquidity", "Supply"]
                  : ["Unsteady", "Liquidity Supply", ""]
              }
              desc={
                media() === "tablet"
                  ? ["DEX Ecosystem", "Vitalization"]
                  : ["DEX", "Ecosystem", "Vitalization"]
              }
            />
            <EnhanceLi
              tit={
                media() === "tablet"
                  ? ["Attenuated On-chain", "Activity and Indicator"]
                  : ["Attenuated", "On-chain Activity", "and Indicator"]
              }
              desc={
                media() === "tablet"
                  ? ["Project Indicators", "Management"]
                  : ["Project", "Indicators", "Management"]
              }
            />
          </S.EnhanceUl>
        </S.EnhnaceContents>
      </S.EnhanceCtnr>
    </S.Enhance>
  );
};

export default Enhance;
