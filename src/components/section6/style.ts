import styled from "@emotion/styled";

import { COLORS, MEDIA } from "config/styles";

import AnimationTit from "components/common/animateTit";
import SectionTit from "components/common/sectionTit";

export const Section6 = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${COLORS.grayscale05};
  padding: 240px 0px 200px 0px;

  ${MEDIA.tablet} {
    padding: 240px 24px 200px 24px;
  }

  ${MEDIA.mobile} {
    padding: 100px 24px;
  }
`;

export const SectionCtnr = styled.div`
  width: 1036px;

  ${MEDIA.tablet} {
    width: 100%;
  }
`;

export const CustomSectionTit = styled(SectionTit)`
  font-size: 64px;

  ${MEDIA.mobile} {
    font-size: 36px;
  }
`;

export const Desc = styled.div`
  font-size: 24px;
  color: ${COLORS.grayscale03};
  margin-top: 24px;

  ${MEDIA.mobile} {
    font-size: 20px;
  }
`;

export const Experts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 120px;

  ${MEDIA.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${MEDIA.mobile} {
    gap: 24px;
    margin-top: 48px;
  }
`;

export const Member = styled(AnimationTit)`
  border: 1px solid ${COLORS.grayscale01};
  border-radius: 20px;
  background-color: ${COLORS.grayscale04}50;
  backdrop-filter: blur(10px);
  padding: 48px;
`;

export const MemberTop = styled.div`
  border-bottom: 1px solid ${COLORS.grayscale03};
  padding-bottom: 24px;

  ${MEDIA.mobile} {
    text-align: center;
  }
`;

export const Position = styled.div`
  font-weight: 700;
  color: ${COLORS.primary1};

  ${MEDIA.mobile} {
    order: 2;
  }
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: ${COLORS.grayscale01};
  margin-top: 4px;
`;

export const Creers = styled.div`
  border-bottom: 1px solid ${COLORS.grayscale03};
  padding: 24px 0px;
`;

export const Creer = styled.div`
  color: ${COLORS.grayscale02};
  margin-top: 8px;

  &:first-of-type {
    margin-top: 0px;
  }

  ${MEDIA.mobile} {
    font-size: 14px;
  }
`;

export const Works = styled.div`
  padding-top: 24px;
`;

export const Work = styled.div`
  color: ${COLORS.grayscale02};
  margin-top: 8px;

  &:first-of-type {
    margin-top: 0px;
  }

  ${MEDIA.mobile} {
    font-size: 14px;
  }
`;

export const BgImg = styled.div`
  position: absolute;
  bottom: 0%;
  right: 0%;
  width: 731px;
  height: 715px;

  img {
    width: 100%;
    height: 100%;
  }

  ${MEDIA.mobile} {
    width: 100%;
    height: auto;
  }
`;
