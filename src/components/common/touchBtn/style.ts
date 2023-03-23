import styled from "@emotion/styled";

import { COLORS, MEDIA } from "config/styles";

export const TouchBtn = styled.button`
  position: relative;
  width: 249px;
  height: 60px;
  border-radius: 100px;
  overflow: hidden;
  cursor: pointer;
  padding: 0px;

  ${MEDIA.tablet} {
    width: 327px;
  }

  ${MEDIA.tablet} {
    width: calc(100vw - 48px);
    max-width: 327px;
  }
`;

export const BtnText = styled.div`
  width: 100%;
  height: 120px;
  transform: translateY(0%);
`;

export const Tit = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 24px;
  line-height: 60px;
  color: ${COLORS.grayscale06};
  background-color: ${COLORS.grayscale01};
  padding-left: 21px;
`;

export const HoverTit = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 24px;
  line-height: 60px;
  color: ${COLORS.grayscale01};
  background-color: ${COLORS.primary1};
  padding-left: 21px;
`;

export const ArrowImgCtnr = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 50px;
  height: 50px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
