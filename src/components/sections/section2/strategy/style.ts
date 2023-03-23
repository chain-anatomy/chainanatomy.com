import styled from "@emotion/styled";
import { Accordion } from "@mui/material";

import { MEDIA } from "config/styles";

export const Strategy = styled.div``;

export const CustomAccordion = styled(Accordion)`
  background-color: inherit;
  box-shadow: none;
`;

export const StrategyUl = styled.div`
  display: flex;

  ${MEDIA.tablet} {
    flex-direction: column;
  }
`;
