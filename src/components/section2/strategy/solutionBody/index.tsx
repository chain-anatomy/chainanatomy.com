import React, { useEffect, useState } from "react";

import * as S from "./style";

import MenuDesc from "components/section2/menu/menuDesc";
import MenuTit from "components/section2/menu/menuTit";
import { TabBar } from "components/section2/tabBar";

import Dashboard1 from "assets/images/section2/dashboard1.png";
import Dashboard2 from "assets/images/section2/dashboard2.png";
import Dashboard3 from "assets/images/section2/dashboard3.png";

interface Props {
  open: number;
}

const SolutionBody: React.FC<Props> = ({ open }) => {
  const [selectCategory, setSelectCategory] = useState("Live Monitoring");

  useEffect(() => {
    if (!open) setSelectCategory("Live Monitoring");
  }, [open]);

  return (
    <S.CustomCollapse in={open === 2}>
      <S.TabMenuCtnr>
        <TabBar
          category={["Live Monitoring"]}
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
        {selectCategory === "Live Monitoring" && (
          <>
            <MenuTit>Alert / Dashboard</MenuTit>
            <MenuDesc>
              Provides a customized risk detection system for real-time
              monitoring of on-chain data.
              <br />
              24 hour alerts enable team to identify risks rapidly
            </MenuDesc>
            <S.DashboardUl>
              <S.DashboardLi>
                <S.DashboardImg src={Dashboard1} alt="Price impact" />
                <S.CustomExp tit={["Price Impact", "(Slippage) Alert"]} />
              </S.DashboardLi>
              <S.DashboardLi>
                <S.DashboardImg src={Dashboard2} alt="Liquidity impact alert" />
                <S.CustomExp
                  tit={["Liquidity Impact Alert"]}
                  desc={[
                    { index: "01", desc: "External liquidity monitoring" },
                  ]}
                />
              </S.DashboardLi>
              <S.DashboardLi>
                <S.DashboardImg src={Dashboard3} alt="Market Growth" />
                <S.CustomExp
                  tit={["Market Growth"]}
                  desc={[
                    { index: "01", desc: "Price / TVL / Volume chart" },
                    {
                      index: "02",
                      desc: "top 10 DEX liquidity\n / volume analysis",
                    },
                  ]}
                />
              </S.DashboardLi>
            </S.DashboardUl>
          </>
        )}
      </S.TabMenuCtnr>
    </S.CustomCollapse>
  );
};

export default SolutionBody;
