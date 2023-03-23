import styled from "@emotion/styled";

import { COLORS, MEDIA } from "config/styles";

import AnimationTit from "components/common/animateTit";

export const Desc = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1204px;
  margin: 200px 0px 100px 0px;

  ${MEDIA.tablet} {
    flex-direction: column;
    width: 100%;
    padding: 0px 24px;
    margin: 90px 0px 36px 0px;
  }

  ${MEDIA.mobile} {
    margin-top: 72px;
  }
`;

export const LeftDesc = styled(AnimationTit)`
  font-size: 24px;
  color: ${COLORS.grayscale02};

  ${MEDIA.mobile} {
    width: 90%;
  }
`;

export const RightDesc = styled(AnimationTit)`
  color: ${COLORS.primary2};
  padding-left: 105px;

  ${MEDIA.tablet} {
    padding-left: 0px;
    margin-top: 24px;
  }

  ${MEDIA.mobile} {
    font-size: 20px;
  }
`;
