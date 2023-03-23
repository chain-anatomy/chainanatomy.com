import styled from "@emotion/styled";
import { Collapse } from "@mui/material";

import { COLORS, MEDIA, SHADOW } from "config/styles";

import Exp from "components/sections/section2/menu/exp";

export const CustomCollapse = styled(Collapse)``;

export const TabMenuCtnr = styled.div`
  border-radius: 20px;
  background-color: ${COLORS.grayscale01};
  padding: 56px 100px;
  margin-top: 64px;

  ${MEDIA.tablet} {
    border-radius: 0px;
    padding: 0px 24px 24px 24px;
    margin-top: 0px;
  }
`;

export const DashboardUl = styled.ul`
  display: flex;
  gap: 40px;
  margin-top: 40px;

  ${MEDIA.tablet} {
    flex-wrap: wrap;
  }

  ${MEDIA.mobile} {
    justify-content: center;
  }
`;

export const DashboardLi = styled.li``;

export const DashboardImg = styled.img`
  width: 301px;
  height: 301px;
  border-radius: 20px;
  box-shadow: ${SHADOW.dashboard};

  ${MEDIA.mobile} {
    max-width: 327px;
    max-height: 327px;
    width: calc(100vw - 48px);
    height: calc(100vw - 48px);
  }
`;

export const CustomExp = styled(Exp)`
  margin-top: 40px;

  ${MEDIA.mobile} {
    margin-top: 24px;
  }
`;
