import styled from "@emotion/styled";

import { COLORS, MEDIA } from "config/styles";

import AnimationTit from "components/common/animateTit";
import SectionTit from "components/common/sectionTit";

export const Section3 = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${COLORS.grayscale05};
  padding: 150px 24px;

  ${MEDIA.mobile} {
    padding: 100px 24px;
  }
`;

export const Section3Ctnr = styled.div`
  max-width: 1204px;

  ${MEDIA.tablet} {
    max-width: inherit;
  }
`;

export const CustomSectionTit = styled(SectionTit)`
  font-size: 64px;
  text-align: center;

  ${MEDIA.tablet} {
    text-align: start;
  }

  ${MEDIA.mobile} {
    font-size: 36px;
  }
`;

export const Cooperate = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 120px;

  ${MEDIA.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${MEDIA.mobile} {
    margin-top: 48px;
  }
`;

export const ImgCtnr = styled(AnimationTit)`
  width: 324px;
  height: 113px;

  ${MEDIA.mobile} {
    width: 100%;
    height: auto;
  }
`;

export const CooperateImg = styled.img`
  width: 100%;
  height: 100%;
`;
