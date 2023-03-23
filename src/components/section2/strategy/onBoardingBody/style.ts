import styled from "@emotion/styled";
import { Collapse } from "@mui/material";

import { COLORS, MEDIA } from "config/styles";

import Exp from "components/section2/menu/exp";

import WebBg from "assets/images/section2/web-bg.png";
import TabletBg from "assets/images/section2/tablet-bg.png";
import MobileBg from "assets/images/section2/mobile-bg.png";

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

export const StrategyUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 40px;

  ${MEDIA.mobile} {
    flex-direction: column;
  }
`;

export const StrategyLi = styled.li`
  display: flex;

  ${MEDIA.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const StrategyImg = styled.img`
  width: 160px;
  height: 160px;

  ${MEDIA.mobile} {
    margin-bottom: 24px;
  }
`;

export const CustomExp = styled(Exp)`
  margin-left: 24px;

  ${MEDIA.mobile} {
    margin: 0px;
  }
`;

// Infra
export const InfraStrategyUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 40px;
`;

export const InfraStrategyLiTop = styled.li`
  display: flex;
  align-items: center;

  ${MEDIA.tablet} {
    flex-direction: column;
    align-items: flex-start;

    &:nth-of-type(2) {
    }
  }
`;

export const StrategyLiLeftTop = styled.div`
  min-width: 504px;

  ${MEDIA.tablet} {
    min-width: inherit;
  }
`;

export const StrategyLiRightTop = styled.div`
  height: fit-content;
  margin-left: 24px;

  > div {
    &:nth-of-type(2) {
      margin-top: 8px;
    }

    &:nth-of-type(3) {
      margin-top: 8px;
    }
  }

  ${MEDIA.tablet} {
    margin: 24px 0px 0px 0px;
  }
`;

export const InfraStrategyLiBot = styled.li`
  display: flex;
  align-items: center;

  ${MEDIA.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StrategyLiLeftBot = styled.div`
  min-width: 504px;

  ${MEDIA.tablet} {
    order: 2;
    min-width: inherit;
    margin-top: 24px;
  }
`;

export const StrategyLiRightBot = styled.div`
  height: fit-content;
  margin-left: 24px;

  > div {
    &:nth-of-type(2) {
      margin-top: 8px;
    }

    &:nth-of-type(3) {
      margin-top: 8px;
    }

    &:nth-of-type(4) {
      margin-top: 8px;
    }
  }

  ${MEDIA.tablet} {
    order: 1;
    margin-left: 0px;
  }
`;

export const InfraLogo = styled.div`
  position: relative;
  display: flex;
  width: 504px;
  height: 250px;
  background-image: url(${WebBg});
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 14px;
  overflow: hidden;

  ${MEDIA.tablet} {
    width: 624px;
    height: 250px;
    background-image: url(${TabletBg});
  }

  ${MEDIA.mobile} {
    width: calc(100vw - 48px);
    height: 162px;
    background-image: url(${MobileBg});
  }
`;

export const WebLogoCtnr = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  width: 1186px;
  /* height: 136px; */

  ${MEDIA.mobile} {
    width: 742px;
  }
`;

export const WebLogo = styled.img`
  width: 100%;
  /* height: 100%; */
`;

// Web3.0 Deployment
export const DeploymentStrategyUl = styled.div``;

export const DeploymentLiTop = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  ${MEDIA.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DeploymentImg = styled.img`
  width: 240px;
  height: 240px;

  ${MEDIA.mobile} {
    max-width: 240px;
    max-height: 240px;
    width: calc(100vw -48px);
    height: calc(100vw -48px);
    margin-bottom: 24px;
  }
`;

export const DeploymentContents = styled.div`
  display: flex;

  ${MEDIA.tablet} {
    flex-direction: column;
  }
`;

export const DeploymentRight = styled.div`
  margin-left: 16px;

  ${MEDIA.tablet} {
    margin-left: 0px;
  }
`;

export const CustomPublishingExp = styled(Exp)`
  margin: 24px 0px 0px 24px;

  ${MEDIA.mobile} {
    margin: 24px 0px 0px 0px;
  }
`;

export const DeploymentLeft = styled.div`
  ${MEDIA.tablet} {
    flex-direction: column;
    margin-top: 40px;
  }
`;

export const DeploymentLiBot = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-left: 50px;

  ${MEDIA.tablet} {
    margin-left: 0px;
  }

  ${MEDIA.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DeploymentBotImg = styled.img`
  width: 240px;
  height: 240px;

  ${MEDIA.tablet} {
    order: 2;
    margin-left: 40px;
  }

  ${MEDIA.mobile} {
    order: 1;
    max-width: 240px;
    max-height: 240px;
    width: calc(100vw -48px);
    height: calc(100vw -48px);
    margin: 0px 0px 24px 0px;
  }
`;

export const DeploymentBotContents = styled.div`
  margin-left: 16px;
  ${MEDIA.tablet} {
    order: 1;
    margin-left: 0px;
  }
`;

export const DeploymentTop = styled.div``;

export const DesktopOnyExp = styled(Exp)`
  margin-left: 24px;

  ${MEDIA.tablet} {
    margin-left: 0px;
  }
`;

export const DeploymentBot = styled.div`
  margin-top: 40px;
`;

// Web3.0 LiveOps
export const LiveOpsDesc = styled.div`
  display: flex;

  ${MEDIA.mobile} {
    flex-direction: column;
  }
`;

export const LiveOpsContents = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const LiveOpsImg = styled.img`
  width: 240px;
  height: 240px;

  ${MEDIA.tablet} {
    margin-right: 40px;
  }

  ${MEDIA.mobile} {
    order: 2;
    margin-top: 40px;
  }
`;

export const LiveOpsRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: 16px;

  ${MEDIA.mobile} {
    margin-left: 0px;
  }}
`;
