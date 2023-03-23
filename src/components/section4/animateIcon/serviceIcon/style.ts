import styled from "@emotion/styled";
import { ANIMATIONS } from "config/styles";

export const G1 = styled.g`
  animation: ${ANIMATIONS.rotateClockwise} 3.5s linear infinite;
  transform-origin: center;
  transform-box: fill-box;
`;
