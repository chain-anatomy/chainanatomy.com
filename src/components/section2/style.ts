import styled from "@emotion/styled";
import { MEDIA } from "config/styles";

export const Section2 = styled.section`
  display: flex;
  justify-content: center;
  padding: 290px 0px 150px 0px;

  ${MEDIA.mobile} {
    padding: 100px 0px 76px 0px;
  }
`;

export const SectionCtnr = styled.div`
  max-width: 1204px;

  ${MEDIA.tablet} {
    width: 100%;
  }
`;
