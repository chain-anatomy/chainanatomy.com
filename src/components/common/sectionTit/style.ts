import styled from "@emotion/styled";

import { ANIMATIONS, COLORS, MEDIA } from "config/styles";

export type AnimationTitProps = {
  active: boolean;
};

export const SectionTit = styled.div<AnimationTitProps>`
  font-size: 72px;
  font-family: "AllianceTextMedium";
  font-weight: 500;
  color: ${COLORS.grayscale01};

  > div {
    display: inline;
    opacity: 0.1;
    animation-name: ${({ active }) => active && ANIMATIONS.opacity};
    animation-duration: 0.1s;
    animation-fill-mode: forwards;

    &:nth-of-type(1) {
      display: inline;
      animation-delay: 0.1s;
    }

    &:nth-of-type(2) {
      display: inline;
      animation-delay: 0.12s;
    }

    &:nth-of-type(3) {
      display: inline;
      animation-delay: 0.14s;
    }

    &:nth-of-type(4) {
      display: inline;
      animation-delay: 0.16s;
    }

    &:nth-of-type(5) {
      display: inline;
      animation-delay: 0.18s;
    }

    &:nth-of-type(6) {
      display: inline;
      animation-delay: 0.2s;
    }

    &:nth-of-type(7) {
      display: inline;
      animation-delay: 0.22s;
    }

    &:nth-of-type(8) {
      display: inline;
      animation-delay: 0.24s;
    }

    &:nth-of-type(9) {
      display: inline;
      animation-delay: 0.26s;
    }

    &:nth-of-type(10) {
      display: inline;
      animation-delay: 0.28s;
    }

    &:nth-of-type(11) {
      display: inline;
      animation-delay: 0.3s;
    }

    &:nth-of-type(12) {
      display: inline;
      animation-delay: 0.32s;
    }

    &:nth-of-type(13) {
      display: inline;
      animation-delay: 0.34s;
    }

    &:nth-of-type(14) {
      display: inline;
      animation-delay: 0.36s;
    }

    &:nth-of-type(15) {
      display: inline;
      animation-delay: 0.38s;
    }

    &:nth-of-type(16) {
      display: inline;
      animation-delay: 0.4s;
    }

    &:nth-of-type(17) {
      display: inline;
      animation-delay: 0.42s;
    }

    &:nth-of-type(18) {
      display: inline;
      animation-delay: 0.44s;
    }

    &:nth-of-type(19) {
      display: inline;
      animation-delay: 0.46s;
    }

    &:nth-of-type(20) {
      display: inline;
      animation-delay: 0.48s;
    }

    &:nth-of-type(21) {
      display: inline;
      animation-delay: 0.5s;
    }

    &:nth-of-type(22) {
      display: inline;
      animation-delay: 0.52s;
    }

    &:nth-of-type(23) {
      display: inline;
      animation-delay: 0.54s;
    }

    &:nth-of-type(24) {
      display: inline;
      animation-delay: 0.56s;
    }

    &:nth-of-type(25) {
      display: inline;
      animation-delay: 0.58s;
    }

    &:nth-of-type(26) {
      display: inline;
      animation-delay: 0.6s;
    }

    &:nth-of-type(27) {
      display: inline;
      animation-delay: 0.62s;
    }

    &:nth-of-type(28) {
      display: inline;
      animation-delay: 0.64s;
    }

    &:nth-of-type(29) {
      display: inline;
      animation-delay: 0.66s;
    }

    &:nth-of-type(30) {
      display: inline;
      animation-delay: 0.68s;
    }

    &:nth-of-type(31) {
      display: inline;
      animation-delay: 0.7s;
    }

    &:nth-of-type(32) {
      display: inline;
      animation-delay: 0.72s;
    }

    &:nth-of-type(33) {
      display: inline;
      animation-delay: 0.74s;
    }

    &:nth-of-type(34) {
      display: inline;
      animation-delay: 0.76s;
    }

    &:nth-of-type(35) {
      display: inline;
      animation-delay: 0.78s;
    }

    &:nth-of-type(36) {
      display: inline;
      animation-delay: 0.8s;
    }

    &:nth-of-type(37) {
      display: inline;
      animation-delay: 0.82s;
    }

    &:nth-of-type(38) {
      display: inline;
      animation-delay: 0.84s;
    }

    &:nth-of-type(39) {
      display: inline;
      animation-delay: 0.86s;
    }

    &:nth-of-type(40) {
      display: inline;
      animation-delay: 0.88s;
    }

    &:nth-of-type(41) {
      display: inline;
      animation-delay: 0.9s;
    }

    &:nth-of-type(42) {
      display: inline;
      animation-delay: 0.92s;
    }

    &:nth-of-type(43) {
      display: inline;
      animation-delay: 0.94s;
    }
  }

  ${MEDIA.tablet} {
    font-size: 64px;
  }
`;

export const TitBasic = styled.div`
  color: ${COLORS.grayscale01};
`;

export const TitActive = styled.div`
  color: ${COLORS.primary1};
`;

export const TitBlack = styled.div`
  color: ${COLORS.grayscale06};
`;
