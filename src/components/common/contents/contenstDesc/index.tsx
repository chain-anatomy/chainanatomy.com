import styled from "@emotion/styled";

import { COLORS, MEDIA } from "config/styles";

const ContentsDesc = styled.div`
  font-family: "AlliancePlattMedium";
  font-size: 24px;
  color: ${COLORS.grayscale03};
  margin-top: 24px;

  ${MEDIA.mobile} {
    font-size: 20px;
    margin-top: 16px;
  }
`;

export default ContentsDesc;
