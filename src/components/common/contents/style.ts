import styled from "@emotion/styled";
import { COLORS, MEDIA } from "config/styles";

export const Contents = styled.div`
  display: flex;

  ${MEDIA.mobile} {
    flex-direction: column;
  }
`;

export const Index = styled.p`
  font-weight: 700;
  color: ${COLORS.primary1};
`;

export const TextCtnr = styled.div`
  margin-left: 8px;
`;
