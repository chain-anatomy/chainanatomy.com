import styled from "@emotion/styled";

import { COLORS, MEDIA } from "config/styles";

import AnimationTit from "components/common/animateTit";
import SectionTit from "components/common/sectionTit";

export const Section4 = styled.section`
  display: flex;
  justify-content: center;
  padding: 290px 0px 150px 0px;

  ${MEDIA.tablet} {
    padding: 290px 24px 150px 24px;
    flex-direction: column;
  }

  ${MEDIA.mobile} {
    padding: 100px 24px;
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

export const ContentsList = styled.div`
  margin-left: 64px;

  ${MEDIA.tablet} {
    margin: 64px 0px 0px 0px;
  }

  ${MEDIA.mobile} {
    margin: 48px 0px 0px 0px;
  }
`;

export const ContentsCtnr = styled(AnimationTit)`
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  background-color: ${COLORS.grayscale05};
  padding: 36px;
  margin-top: 60px;

  &:first-of-type {
    margin-top: 0px;
  }

  ${MEDIA.mobile} {
    padding: 24px;
    margin-top: 24px;

    &:first-of-type {
      margin-top: 0px;
    }
  }
`;

export const AnimateIcon = styled.div`
  margin-left: 137px;

  ${MEDIA.mobile} {
    margin-left: 0px;
  }
`;
