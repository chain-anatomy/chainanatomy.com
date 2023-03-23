import styled from "@emotion/styled";
import { AccordionSummary } from "@mui/material";

import { COLORS, MEDIA } from "config/styles";

import AnimationTit from "components/common/animateTit";

export const StrategyLi = styled(AccordionSummary)`
  width: 380px;
  border-right: 1px solid ${COLORS.grayscale03};
  padding: 0px;

  &:nth-of-type(1) {
    padding-right: 64px;
  }

  &:nth-of-type(2) {
    padding-right: 64px;
    margin-left: 64px;
  }

  &:nth-of-type(3) {
    border-right: 0px;
    padding-left: 64px;
  }

  & .MuiAccordionSummary-content {
    flex-direction: column;
    margin: 0px !important;
  }

  &:hover {
    p {
      color: ${COLORS.grayscale01};
    }
  }

  ${MEDIA.tablet} {
    width: 100%;
    border-right: 0px;
    padding-top: 64px;

    &:nth-of-type(1) {
      padding-right: 0px;
    }

    &:nth-of-type(2) {
      padding-right: 0px;
      margin-left: 0px;
    }

    &:nth-of-type(3) {
      border-right: 0px;
      padding-left: 0px;
    }

    ${MEDIA.mobile} {
      padding-top: 48px;
    }
  }
`;

export const IconCtnr = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${MEDIA.tablet} {
    padding: 0px 24px;
  }
`;

export interface ArrowProps {
  hover: boolean;
  open: boolean;
}

export const Arrow = styled.div<ArrowProps>`
  width: 60px;
  height: 60px;

  svg {
    width: 100%;
    height: 100%;

    fill: ${({ hover }) => hover && COLORS.primary1};
    rect {
      stroke: ${({ hover }) => hover && "none"};
    }

    path {
      fill: ${({ hover }) => hover && COLORS.grayscale01};
      stroke: ${({ hover, open }) => hover && open && COLORS.grayscale01};
    }
  }

  ${MEDIA.mobile} {
    width: 48px;
    height: 48px;
  }
`;

export const Icon = styled.div`
  width: 72px;
  height: 72px;

  svg {
    width: 100%;
    height: 100%;
  }

  ${MEDIA.mobile} {
    width: 60px;
    height: 60px;
  }
`;

export const Title = styled(AnimationTit)<{ open: boolean }>`
  font-family: "AlliancePlattMedium";
  font-size: 32px;
  color: ${COLORS.grayscale02};
  margin-top: 40px;

  ${MEDIA.tablet} {
    border-bottom: ${({ open }) => !open && `1px solid ${COLORS.grayscale03}`};
    padding: 64px 0px;
    margin: 0px 24px;
  }

  ${MEDIA.mobile} {
    padding: 40px 0px;
  }
`;
