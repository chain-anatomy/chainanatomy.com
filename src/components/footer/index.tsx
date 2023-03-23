import React from "react";

import * as S from "./style";

import { HasNavProps } from "components/header";

import LogoImg from "assets/images/footer/footer-logo.png";
import { ReactComponent as TwitterImg } from "assets/images/footer/twitter.svg";
import { ReactComponent as InstagramImg } from "assets/images/footer/instagram.svg";
import { ReactComponent as TelegramImg } from "assets/images/footer/telegram.svg";

const Footer: React.FC<HasNavProps> = ({ navList }) => {
  return (
    <S.Footer>
      <S.FooterContents>
        <S.FooterTop>
          <S.CompanyInfo>
            <S.Logo>
              <img src={LogoImg} alt="Chain anatomy logo" />
            </S.Logo>
            <S.Address>
              Management Office
              <br />
              5F, 125, Wangsimni-ro, Seongdong-gu
              <br />
              Seoul, Republic of Korea
            </S.Address>
          </S.CompanyInfo>
          <S.FooterNav navList={navList} />
        </S.FooterTop>

        <S.FooterBot>
          <S.CopyRight>2023. CHAIN ANATOMY. All rights reserved.</S.CopyRight>
          <S.SNS>
            <S.SNSLi>
              <a href="#">
                <TwitterImg />
              </a>
            </S.SNSLi>
            <S.SNSLi>
              <a href="#">
                <InstagramImg />
              </a>
            </S.SNSLi>
            <S.SNSLi>
              <a href="#">
                <TelegramImg />
              </a>
            </S.SNSLi>
          </S.SNS>
        </S.FooterBot>
      </S.FooterContents>
    </S.Footer>
  );
};

export default Footer;
