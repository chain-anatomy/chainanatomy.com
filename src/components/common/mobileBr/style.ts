import styled from "@emotion/styled";

import { MEDIA } from "config/styles";

export const Br = styled.br`
  display: none;
  ${MEDIA.tablet} {
    display: block;
  }
`;
