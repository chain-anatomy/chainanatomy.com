import styled from "@emotion/styled";

import { COLORS, MEDIA, SHADOW } from "config/styles";

import AnimationTit from "components/common/animateTit";
import SectionTit from "components/common/sectionTit";

export const Enhance = styled.div`
  ${MEDIA.tablet} {
    padding: 0px 24px;
  }
`;

export const EnhanceCtnr = styled.div`
  display: flex;

  ${MEDIA.tablet} {
    flex-direction: column;
  }
`;

export const Icon = styled.div`
  position: sticky;
  top: 90px;
  width: 116px;
  height: 116px;
  box-shadow: ${SHADOW.basic};
  border: 1px solid ${COLORS.grayscale01};
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
  }

  ${MEDIA.tablet} {
    position: inherit;
  }

  ${MEDIA.mobile} {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }
`;

export const EnhnaceContents = styled.div`
  width: 1024px;
  margin-left: 64px;

  ${MEDIA.tablet} {
    width: 100%;
    margin: 64px 0px 0px 0px;
  }

  ${MEDIA.mobile} {
    margin: 24px 0px 0px 0px;
  }
`;

export const CustomSectionTit = styled(SectionTit)`
  font-size: 64px;
  line-height: 1.1;

  ${MEDIA.mobile} {
    font-size: 36px;
  }
`;

export const SubTit = styled(AnimationTit)`
  font-size: 24px;
  color: ${COLORS.grayscale03};
  margin-top: 24px;
`;

export const EnhanceUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin-top: 120px;

  ${MEDIA.tablet} {
    flex-direction: column;
  }

  ${MEDIA.mobile} {
    margin-top: 25px;
  }
`;
