import styled from "@emotion/styled";

import { COLORS, MEDIA } from "config/styles";

import AnimationTit from "components/common/animateTit";

export const EnhanceLi = styled.li`
  width: 329px;
  border-right: 1px solid ${COLORS.grayscale04};
  padding-right: 37px;
  margin-left: 37px;

  &:first-of-type {
    margin-left: 0%;
  }

  &:last-of-type {
    border-right: 0px;
    padding-right: 0px;
    padding-left: 37px;
    margin-left: 0px;
  }

  :hover {
    p {
      color: ${COLORS.grayscale01};
    }

    svg {
      fill: ${COLORS.primary1};

      rect {
        stroke: none;
      }

      path {
        fill: ${COLORS.grayscale01};
      }
    }
  }

  ${MEDIA.tablet} {
    display: flex;
    align-items: center;
    width: 100%;
    border-right: 0px;
    border-bottom: 1px solid ${COLORS.grayscale04};
    padding: 60px 0px;
    margin: 0px;

    &:last-of-type {
      border-bottom: 0px;
      padding-left: 0px;
    }
  }

  ${MEDIA.mobile} {
    width: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 0px;
    margin: 24px 0px 0px 0px;

    &:first-of-type {
      margin-left: 0px;
    }

    &:last-of-type {
      margin-left: 0px;
    }
  }
`;

export const Management = styled(AnimationTit)`
  display: flex;
  justify-content: space-between;

  div {
    font-family: "AlliancePlattMedium";
    font-weight: 500;
    font-size: 24px;
    color: ${COLORS.grayscale03};
  }

  ${MEDIA.tablet} {
    div {
      width: 260px;
      margin-right: 24px;
    }
  }

  ${MEDIA.mobile} {
    width: 100%;

    div {
      font-size: 20px;
      margin-right: 20px;
    }
  }
`;

export const ArrowBtn = styled.span`
  width: 60px;
  height: 60px;
  margin-left: 0px;

  svg {
    width: 100%;
    height: 100%;
  }

  ${MEDIA.mobile} {
    width: 48px;
    height: 48px;
  }
`;

export const ListTit = styled(AnimationTit)`
  font-family: "AlliancePlattMedium";
  font-weight: 500;
  font-size: 32px;
  color: ${COLORS.grayscale02};
  margin-top: 24px;

  ${MEDIA.tablet} {
    margin: 0px 0px 0px 48px;
  }

  ${MEDIA.mobile} {
    margin: 0px;
  }
`;
