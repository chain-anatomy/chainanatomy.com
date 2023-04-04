import styled from "@emotion/styled";

import { ANIMATIONS, COLORS, MEDIA } from "config/styles";

import AnimationTit from "components/common/animateTit";
import SectionTit from "components/common/sectionTit";
import { AnimationTitProps } from "components/common/sectionTit/style";

import { media } from "utils";

import BgImg from "assets/images/section1/bg.png";

export const Section1Ctnr = styled.section``;

export const Swup = styled.div`
  background-image: ${media() !== "desktop" && `url(${BgImg})`};
  background-size: cover;
  background-position: 50% 50%;
`;

export const CursorWrapper = styled.div`
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CursorCtnr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);

  g {
    transform-origin: center center;
  }
`;

export const Contents = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1204px;
  transform: translate(-50%, -50%);

  ${MEDIA.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  ${MEDIA.mobile} {
    align-items: flex-start;
    left: 0px;
    transform: translate(0%, -50%);
    max-width: 100vw;
    padding-left: 24px;
  }
`;

export const CustomSectionTit = styled(SectionTit)<AnimationTitProps>`
  max-width: 1204px;
  text-align: center;
  opacity: 0;
  transform: translate3d(0, 50%, 0);
  animation-name: ${({ active }) => active && ANIMATIONS.fadeInUp};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  margin-top: 170px;

  ${MEDIA.tablet} {
    max-width: inherit;
  }

  ${MEDIA.mobile} {
    font-size: 40px;
    text-align: start;
    margin-top: 0px;
  }
`;

export const SubTit = styled(AnimationTit)`
  font-family: "AlliancePlattMedium";
  font-weight: 500;
  color: ${COLORS.grayscale02};
  font-size: 32px;
  text-align: center;
  margin-top: 50px;

  ${MEDIA.tablet} {
    font-size: 24px;
  }

  ${MEDIA.mobile} {
    font-size: 24px;
    text-align: start;
  }
`;

export const Mission = styled(AnimationTit)`
  font-size: 20px;
  color: ${COLORS.grayscale03};
  text-align: center;
  margin-top: 30px;

  ${MEDIA.tablet} {
    font-size: 16px;
  }

  ${MEDIA.mobile} {
    font-size: 16px;
    text-align: start;
  }
`;

export const TouchBtnCtnr = styled.div`
  margin-top: 150px;

  ${MEDIA.mobile} {
    margin-top: 50px;
  }
`;
