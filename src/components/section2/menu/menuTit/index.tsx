import styled from "@emotion/styled";

import { COLORS, MEDIA } from "config/styles";

const MenuTit = styled.p`
  font-family: "AllianceTextMedium";
  font-size: 64px;
  color: ${COLORS.grayscale06};
  margin-top: 64px;

  ${MEDIA.tablet} {
    margin-top: 48px;
  }

  ${MEDIA.mobile} {
    font-size: 32px;
    margin-top: 40px;
  }
`;

export default MenuTit;
