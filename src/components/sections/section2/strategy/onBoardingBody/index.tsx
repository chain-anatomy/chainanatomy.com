import React, { useEffect, useRef, useState } from "react";

import * as S from "./style";

import { media } from "utils";

import MenuDesc from "components/sections/section2/menu/menuDesc";
import MenuTit from "components/sections/section2/menu/menuTit";
import { TabBar } from "components/sections/section2/tabBar";
import MediaBr from "components/common/mobileBr";

import Strategy1 from "assets/images/section2/strategy1.png";
import Strategy2 from "assets/images/section2/strategy2.png";
import Strategy3 from "assets/images/section2/strategy3.png";
import InfraLogo from "assets/images/section2/infra-logo.png";
import Deployment1 from "assets/images/section2/deployment1.png";
import Deployment2 from "assets/images/section2/deployment2.png";
import LiveOps from "assets/images/section2/liveOps.png";

interface Props {
  open: number;
}

const OnBoardingBody: React.FC<Props> = ({ open }) => {
  const [selectCategory, setSelectCategory] = useState("Strategy / Operation");
  const slideWrapRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) setSelectCategory("Strategy / Operation");
  }, [open]);

  useEffect(() => {
    if (bannerRef.current && slideWrapRef.current) {
      bannerRef.current.id = "roller1";
      const cloneBanner = bannerRef.current.cloneNode(true) as HTMLElement;
      cloneBanner.id = "roller2";
      slideWrapRef.current.appendChild(cloneBanner);

      const roller1 = document.querySelector("#roller1") as HTMLElement;
      const roller2 = document.querySelector("#roller2") as HTMLElement;

      roller1.style.left = "0px";
      roller2.style.left = roller1.offsetWidth + "px";
      bannerRef.current.classList.add("original");
      cloneBanner.classList.add("clone");
    }
  }, [selectCategory]);

  return (
    <S.CustomCollapse in={open === 3}>
      <S.TabMenuCtnr>
        <TabBar
          category={[
            "Strategy / Operation",
            "Infrastructure",
            "Web3.0 Deployment",
            "Web3.0 LiveOps",
          ]}
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />

        {selectCategory === "Strategy / Operation" && (
          <>
            <MenuTit>Strategy / Operation</MenuTit>
            <S.StrategyUl>
              <S.StrategyLi>
                <S.StrategyImg src={Strategy1} alt="Price impact" />
                <S.CustomExp
                  tit={["Project System Architecture"]}
                  desc={[
                    { index: "01", desc: "Blockchain Service Flow" },
                    { index: "02", desc: "Data source managing plan" },
                    { index: "03", desc: "Blockchain project tokenomics" },
                    { index: "04", desc: "Server Database" },
                  ]}
                />
              </S.StrategyLi>

              <S.StrategyLi>
                <S.StrategyImg src={Strategy2} alt="NFT functions" />
                <S.CustomExp
                  tit={["NFT functions"]}
                  desc={[
                    { index: "01", desc: "Merge" },
                    { index: "02", desc: "Split" },
                    { index: "03", desc: "Breeding" },
                  ]}
                />
              </S.StrategyLi>

              <S.StrategyLi>
                <S.StrategyImg
                  src={Strategy3}
                  alt="On/Off-chain interaction plan"
                />
                <S.CustomExp
                  tit={["On/Off-chain interaction plan"]}
                  desc={[
                    { index: "01", desc: "Blockchain component customizing" },
                    { index: "02", desc: "NFT-fi / Staking" },
                    { index: "03", desc: "Lending / NFT Dao" },
                    { index: "04", desc: "Server Database" },
                  ]}
                />
              </S.StrategyLi>
            </S.StrategyUl>
          </>
        )}

        {selectCategory === "Infrastructure" && (
          <>
            <MenuTit>Infrastructure</MenuTit>
            <S.InfraStrategyUl>
              <S.InfraStrategyLiTop>
                <S.StrategyLiLeftTop>
                  <S.CustomExp
                    tit={["Node Operating"]}
                    desc={[
                      {
                        index: "01",
                        desc: "Ethereum, Klaytn, Matic, Solana,\n BSC, Near, etc",
                      },
                    ]}
                  />
                </S.StrategyLiLeftTop>
                <S.StrategyLiRightTop>
                  <S.CustomExp tit={["IPFS Operating"]} />
                  <S.CustomExp tit={["IPFS private gateway"]} />
                  <S.CustomExp tit={["IPFS- metadata management"]} />
                </S.StrategyLiRightTop>
              </S.InfraStrategyLiTop>
              <S.InfraStrategyLiBot>
                <S.StrategyLiLeftBot>
                  <S.InfraLogo ref={slideWrapRef}>
                    <S.WebLogoCtnr ref={bannerRef}>
                      <S.WebLogo src={InfraLogo} alt="InfraLogo" />
                    </S.WebLogoCtnr>
                  </S.InfraLogo>
                </S.StrategyLiLeftBot>
                <S.StrategyLiRightBot>
                  <S.CustomExp tit={["Public Cloud Management(AWS)"]} />
                  <S.CustomExp tit={["Domain Management"]} />
                  <S.CustomExp tit={["Backend Server Management"]} />
                  <S.CustomExp tit={["S3 Data Management"]} />
                </S.StrategyLiRightBot>
              </S.InfraStrategyLiBot>
            </S.InfraStrategyUl>
          </>
        )}

        {selectCategory === "Web3.0 Deployment" && (
          <>
            <MenuTit>Web3.0 Deployment</MenuTit>
            <S.DeploymentStrategyUl>
              <S.DeploymentLiTop>
                <S.DeploymentImg src={Deployment1} alt="Deployment image" />
                <S.DeploymentContents>
                  <S.DeploymentRight>
                    <S.CustomExp tit={["Custom Smart Contract"]} />
                    <S.CustomPublishingExp
                      tit={["Publishing"]}
                      desc={[
                        {
                          index: "01",
                          desc: "ERC20, ERC721, ERC1155, ERC5114 / etc",
                        },
                        {
                          index: "02",
                          desc: "Vesting, Locking, Upgradable(proxy), DAO",
                        },
                        {
                          index: "03",
                          desc: "NFT merge / Split",
                        },
                      ]}
                    />
                  </S.DeploymentRight>
                  <S.DeploymentLeft>
                    <S.CustomExp
                      tit={["Defi"]}
                      desc={[
                        {
                          index: "01",
                          desc: "Swap, Staking,\n Lending, Uniswap v3",
                        },
                      ]}
                    />
                  </S.DeploymentLeft>
                </S.DeploymentContents>
              </S.DeploymentLiTop>
              <S.DeploymentLiBot>
                <S.DeploymentBotImg src={Deployment2} alt="Deployment image" />
                <S.DeploymentBotContents>
                  <S.DeploymentTop>
                    <S.DesktopOnyExp
                      tit={["Service"]}
                      desc={[
                        {
                          index: "01",
                          desc: "On/off chain bridging api",
                        },
                        {
                          index: "02",
                          desc: "on-chain data sync",
                        },
                        {
                          index: "03",
                          desc: "on-chain event publishing",
                        },
                        {
                          index: "04",
                          desc: "on-chain data indexing/searching",
                        },
                      ]}
                      type={media() === "desktop" ? "column" : "row"}
                    />
                  </S.DeploymentTop>
                  <S.DeploymentBot>
                    <S.DesktopOnyExp
                      tit={["Marketplace"]}
                      desc={[
                        {
                          index: "01",
                          desc: "Gas optimized maketplace: Wyvern / Seaport protocol",
                        },
                      ]}
                    />
                  </S.DeploymentBot>
                </S.DeploymentBotContents>
              </S.DeploymentLiBot>
            </S.DeploymentStrategyUl>
          </>
        )}

        {selectCategory === "Web3.0 LiveOps" && (
          <>
            <MenuTit>Strategy / Operation</MenuTit>
            <S.LiveOpsDesc>
              {media() !== "desktop" && (
                <S.LiveOpsImg src={LiveOps} alt="web3.0 LiveOps" />
              )}
              <MenuDesc>
                Activate the trading ecosystem through liquidity management and
                create a pleasant trading
                <MediaBr media="desktop" /> environment for DEX. Utilizes
                algorithms to provide dynamic liquidity suitable
                <MediaBr media="desktop" />
                for market conditions
              </MenuDesc>
            </S.LiveOpsDesc>
            <S.LiveOpsContents>
              {media() === "desktop" && (
                <S.LiveOpsImg src={LiveOps} alt="web3.0 LiveOps" />
              )}
              <S.LiveOpsRight>
                <S.DesktopOnyExp
                  tit={["Manage overall/interval liquidity size"]}
                  desc={[
                    {
                      index: "01",
                      desc: "Revenue perspective/Risk managing perspective",
                    },
                  ]}
                />
                <S.DesktopOnyExp tit={["Maximize Earned fee"]} />
                <S.DesktopOnyExp
                  tit={[
                    "Liquidity Control Based on Project Operations Strategy",
                  ]}
                />
                <S.DesktopOnyExp
                  tit={[
                    "Provides dynamic liquidity based on target price scenario",
                  ]}
                />
              </S.LiveOpsRight>
            </S.LiveOpsContents>
          </>
        )}
      </S.TabMenuCtnr>
    </S.CustomCollapse>
  );
};

export default OnBoardingBody;
