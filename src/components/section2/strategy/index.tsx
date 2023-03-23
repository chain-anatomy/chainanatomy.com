import React, { useState } from "react";

import * as S from "./style";

import { media } from "utils";

import StrategyLi from "./strategyLi";
import LiquidityBody from "./liquidityBody";
import SolutionBody from "./solutionBody";
import OnBoardingBody from "./onBoardingBody";

import { ReactComponent as Liquidity } from "assets/images/section2/liquidity.svg";
import { ReactComponent as Risk } from "assets/images/section2/risk.svg";
import { ReactComponent as Web3 } from "assets/images/section2/web3.0.svg";

const Strategy = () => {
  const [open, setOpen] = useState(0);

  const handleClick = (li: number) => {
    open === li || open !== 0 ? setOpen(0) : setOpen(li);
  };

  return (
    <S.Strategy>
      <S.CustomAccordion>
        <S.StrategyUl>
          <StrategyLi
            handleClick={() => handleClick(1)}
            icon={<Liquidity />}
            tit1="Liquidity"
            tit2="Management"
            open={open === 1}
          />
          {media() === "tablet" && <LiquidityBody open={open} />}
          {media() === "mobile" && <LiquidityBody open={open} />}
          <StrategyLi
            handleClick={() => handleClick(2)}
            icon={<Risk />}
            tit1="Risk Sensing"
            tit2="Solution"
            open={open === 2}
          />
          {media() === "tablet" && <SolutionBody open={open} />}
          {media() === "mobile" && <SolutionBody open={open} />}
          <StrategyLi
            handleClick={() => handleClick(3)}
            icon={<Web3 />}
            tit1="Web3.0"
            tit2="On-Boarding"
            open={open === 3}
          />
          {media() === "tablet" && <OnBoardingBody open={open} />}
          {media() === "mobile" && <OnBoardingBody open={open} />}
        </S.StrategyUl>
        {media() === "desktop" && (
          <>
            <LiquidityBody open={open} />
            <SolutionBody open={open} />
            <OnBoardingBody open={open} />
          </>
        )}
      </S.CustomAccordion>
    </S.Strategy>
  );
};

export default Strategy;
