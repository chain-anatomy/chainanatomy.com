import styled from "@emotion/styled";

import { ANIMATIONS, COLORS, MEDIA } from "config/styles";

import Contents from "components/common/contents";
import SectionTit from "components/common/sectionTit";

export const Section5 = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${COLORS.grayscale05};
  padding: 150px 0px 0px 0px;

  ${MEDIA.tablet} {
    padding: 0px 24px;
  }

  ${MEDIA.mobile} {
    padding: 100px 24px 0px 24px;
  }
`;

export const Process = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 1204px;
  padding-bottom: 200px;

  ${MEDIA.tablet} {
    width: 100%;
    flex-direction: column;
  }

  ${MEDIA.tablet} {
    padding-bottom: 100px;
  }
`;

export const CustomSectionTit = styled(SectionTit)`
  font-size: 60px;

  ${MEDIA.mobile} {
    font-size: 36px;
  }
`;

export const ContentsUl = styled.ul`
  width: fill-available;
  margin-left: 64px;

  ${MEDIA.tablet} {
    margin-left: 0px;
  }

  ${MEDIA.mobile} {
    margin-top: 24px;
  }
`;

interface ContetnsLiProps {
  startLi: boolean;
}

export const ContentsLi = styled.li<ContetnsLiProps>`
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
  animation-name: ${({ startLi }) => startLi && ANIMATIONS.fadeInLeft};

  &:nth-of-type(2) {
    margin-left: 80px;
  }

  &:nth-of-type(3) {
    margin-left: 160px;
  }

  &:nth-of-type(4) {
    margin-left: 240px;
  }

  ${MEDIA.mobile} {
    &:nth-of-type(2) {
      margin-left: 0px;
    }

    &:nth-of-type(3) {
      margin-left: 0px;
    }

    &:nth-of-type(4) {
      margin-left: 0px;
    }
  }
`;

export const CustomContents = styled(Contents)`
  padding-top: 40px;

  > div {
    width: 640px;
    border-bottom: 1px solid ${COLORS.grayscale03};
    padding-bottom: 30px;
  }

  ${MEDIA.mobile} {
    padding-top: 24px;

    > div {
      width: 100%;
    }
  }
`;

export const BgImg = styled.div`
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 560px;
  height: 722px;

  img {
    width: 100%;
    height: 100%;
  }

  ${MEDIA.mobile} {
    width: 327px;
    height: 421px;
  }
`;
