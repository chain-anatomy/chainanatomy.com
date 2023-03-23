import styled from "@emotion/styled";
import { Tabs, Tab } from "@mui/material";

import { COLORS, MEDIA } from "config/styles";

export const TabBarContainer = styled(Tabs)`
  display: flex;
  width: 100%;

  & .MuiButtonBase-root {
    border-bottom: 2px solid ${COLORS.grayscale02};
  }

  & .MuiTabs-indicator {
    height: 2px;
    background-color: ${COLORS.primary3};
  }
`;

export const TabItem = styled(Tab)<{ isSelect?: Boolean }>`
  min-width: auto;
  padding: 24px 16px !important;
  text-transform: none;
  cursor: pointer;
`;

export const TabText = styled.p<{ isSelect?: Boolean }>`
  font-size: 24px;
  font-family: "AlliancePlattMedium";
  font-weight: ${(props) => (props.isSelect ? "500" : "400")};
  color: ${(props) => (props.isSelect ? COLORS.primary3 : COLORS.grayscale03)};

  ${MEDIA.mobile} {
    font-size: 16px;
  }
`;
