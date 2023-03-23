import styled from "@emotion/styled";

import { COLORS, MEDIA } from "config/styles";

const MenuDesc = styled.p`
  font-size: 24px;
  color: ${COLORS.grayscale04};
  margin-top: 40px;

  ${MEDIA.mobile} {
    font-size: 20px;
  }
`;

export default MenuDesc;
