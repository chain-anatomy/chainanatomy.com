import styled from "@emotion/styled";
import { Collapse } from "@mui/material";

import { COLORS, MEDIA } from "config/styles";

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

export const ExpCtnr = styled.div`
  display: flex;
  margin-top: 40px;

  ${MEDIA.tablet} {
    flex-direction: column;
  }
`;

export const RightExp = styled(Exp)`
  margin-left: 64px;

  ${MEDIA.tablet} {
    margin: 64px 0px 0px 0px;
  }
`;

export const Img = styled.img`
  display: block;
  width: 662px;
  height: 251px;
  margin: 64px auto 0px auto;

  ${MEDIA.mobile} {
    width: calc(100vw - 48px);
    height: auto;
    margin: 24px auto 0px auto;
  }
`;

export const ArbitrageContents = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  ${MEDIA.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ArbitrageExpCtnr = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  gap: 40px;
`;

export const ArbitrageImg = styled.img`
  width: 475px;
  height: 376px;
  margin-left: 40px;

  ${MEDIA.tablet} {
    margin: 40px 0px 0px 0px;
  }

  ${MEDIA.mobile} {
    width: calc(100vw - 48px);
    height: auto;
  }
`;

export const DynamicTopContents = styled.div`
  display: flex;
  align-items: center;

  ${MEDIA.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DynamicExpCtnr = styled.div`
  margin-top: 40px;

  ${MEDIA.tablet} {
    margin: 40px 0px 40px 0px;
  }
`;

export const DynamicTopExp = styled(Exp)`
  margin: 40px 0px 56px 0px;

  ${MEDIA.tablet} {
    margin: 40px 0px 0px 0px;
  }

  ${MEDIA.mobile} {
    margin: 24px 0px 0px 0px;
  }
`;

export const DynamicTopImg = styled.img`
  width: 366px;
  height: 141px;
  margin-left: 35px;

  ${MEDIA.mobile} {
    width: 100%;
    height: auto;
    margin-left: 0px;
  }
`;

export const DynamicBotContents = styled.div`
  display: flex;
  align-items: center;
  margin-left: 84px;

  ${MEDIA.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }

  ${MEDIA.mobile} {
    margin-left: 0px;
  }
`;

export const DynamicBotExp = styled(Exp)`
  margin-top: 67px;

  ${MEDIA.mobile} {
    margin-top: 24px;
  }
`;
