import styled from "@emotion/styled";

import { ANIMATIONS } from "config/styles";

import { AnimationTitProps } from "../sectionTit/style";

export const AnimationTit = styled.div<AnimationTitProps>`
  opacity: 0;
  transform: translate3d(0, 50%, 0);
  animation-name: ${({ active }) => active && ANIMATIONS.fadeInUp};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
`;
