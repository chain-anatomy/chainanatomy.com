import React from "react";

import styled from "@emotion/styled";

import { MEDIA } from "config/styles";

export interface MediaProps {
  media: "desktop" | "tablet" | "mobile";
}

const MediaOnlyDiv = styled.div<MediaProps>`
  display: none;

  ${MEDIA.desktop} {
    display: ${({ media }) => media === "desktop" && "flex"};
  }
  ${MEDIA.tablet} {
    display: ${({ media }) => media === "tablet" && "flex"};
  }
  ${MEDIA.mobile} {
    display: ${({ media }) => media === "mobile" && "flex"};
  }
`;

export default MediaOnlyDiv;
