import React, { useEffect, useState } from "react";

import * as S from "./style";

import Exp from "components/section2/menu/exp";
import MenuDesc from "components/section2/menu/menuDesc";
import MenuTit from "components/section2/menu/menuTit";
import { TabBar } from "components/section2/tabBar";

import PoolBalancer from "assets/images/section2/pool-balancer.png";
import ArbitrageStrategy from "assets/images/section2/arbitrage-strategy.png";
import DynamicTopImg from "assets/images/section2/dynamic-top.png";
import DynamicBotImg from "assets/images/section2/dynamic-bot.png";

interface Props {
  open: number;
}

const LiquidityBody: React.FC<Props> = ({ open }) => {
  const [selectCategory, setSelectCategory] = useState("Pool Balancer");

  useEffect(() => {
    if (!open) setSelectCategory("Pool Balancer");
  }, [open]);

  return (
    <S.CustomCollapse in={open === 1} timeout="auto" unmountOnExit>
      <S.TabMenuCtnr>
        <TabBar
          category={[
            "Pool Balancer",
            "Arbitrage Strategy",
            "Liquidity Managing",
          ]}
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />

        {selectCategory === "Pool Balancer" && (
          <>
            <MenuTit>Single / Multi Pair</MenuTit>
            <MenuDesc>
              Pool Balancer is the most basic Function. which links the price{" "}
              <br />
              of project tokens listed on the CEX exchange to DEX.
            </MenuDesc>
            <S.ExpCtnr>
              <Exp
                tit={["Price matching", "with CEX reference price"]}
                desc={[
                  {
                    index: "01",
                    desc: "Single Pair",
                  },
                  {
                    index: "02",
                    desc: "Multi Pairs",
                  },
                ]}
              />
              <S.RightExp
                tit={["Extended ", "Liquidity Service"]}
                desc={[
                  {
                    index: "01",
                    desc: "Increase liquidity by leveraging the liquidity\n of the overlapping asset pairs from individual DEXs",
                  },
                ]}
              />
            </S.ExpCtnr>
            <S.Img src={PoolBalancer} alt="Pool Balance" />
          </>
        )}

        {selectCategory === "Arbitrage Strategy" && (
          <>
            <MenuTit>Blockchain active initiator</MenuTit>
            <MenuDesc>
              Strategy that resolves the price gap between Pair and CEX of
              various DEXs
              <br />
              through arbitrage. Prevents potential losses, and improves
              blockchain activity indicators.
            </MenuDesc>
            <S.ArbitrageContents>
              <S.ArbitrageExpCtnr>
                <Exp
                  tit={["DEX Cyclical Arbitrage"]}
                  desc={[
                    {
                      index: "01",
                      desc: "minimize price gaps between pairs\n on DEXs and avoids potential losses",
                    },
                  ]}
                />
                <Exp
                  tit={["DEX-CEX Arbitrage"]}
                  desc={[
                    {
                      index: "01",
                      desc: "Revenue Generation Strategy\n through CEX-DEX arbitrage",
                    },
                  ]}
                />
                <Exp tit={["Unique active wallet", "# manage"]} />
                <Exp tit={["Impersonated user", "transaction generating"]} />
              </S.ArbitrageExpCtnr>
              <S.ArbitrageImg
                src={ArbitrageStrategy}
                alt="Arbitrage strategy"
              />
            </S.ArbitrageContents>
          </>
        )}

        {selectCategory === "Liquidity Managing" && (
          <>
            <MenuTit>Dynamic Liquidity</MenuTit>
            <MenuDesc>
              Activate the trading ecosystem through liquidity management
              <br />
              and create a pleasant trading environment for DEX.
              <br />
              Utilizes algorithms to provide dynamic liquidity suitable for
              market conditions.
            </MenuDesc>
            <S.DynamicTopContents>
              <S.DynamicExpCtnr>
                <Exp
                  tit={["Manage overall/interval liquidity size"]}
                  desc={[
                    {
                      index: "01",
                      desc: "Revenue perspective /\n Risk managing perspective",
                    },
                  ]}
                />
                <S.DynamicTopExp tit={["Maximize Earned fee"]} />
              </S.DynamicExpCtnr>
              <S.DynamicTopImg src={DynamicTopImg} alt="Chart image" />
            </S.DynamicTopContents>
            <S.DynamicBotContents>
              <S.DynamicExpCtnr>
                <Exp
                  tit={[
                    "Liquidity Control Based",
                    "on Project Operations Strategy",
                  ]}
                />
                <S.DynamicBotExp
                  tit={[
                    "Provides dynamic liquidity based",
                    "on target price scenario",
                  ]}
                />
              </S.DynamicExpCtnr>
              <S.DynamicTopImg src={DynamicBotImg} alt="Chart image" />
            </S.DynamicBotContents>
          </>
        )}
      </S.TabMenuCtnr>
    </S.CustomCollapse>
  );
};

export default LiquidityBody;
