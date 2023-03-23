import React from "react";
import styled from "@emotion/styled";

import { MEDIA } from "config/styles";

import { MediaProps } from "../mediaOnlyDiv";

const MediaBr = styled.br<MediaProps>`
  display: none;
  ${MEDIA.desktop} {
    display: ${({ media }) => media === "desktop" && "block"};
  }
  ${MEDIA.tablet} {
    display: ${({ media }) => media === "tablet" && "block"};
  }
  ${MEDIA.mobile} {
    display: ${({ media }) => media === "mobile" && "block"};
  }
`;

export default MediaBr;
