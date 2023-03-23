import styled from "@emotion/styled";

import { COLORS, MEDIA } from "config/styles";

import Nav from "components/common/nav";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.grayscale06};
  padding: 100px 112px 51px 112px;

  ${MEDIA.tablet} {
    padding: 60px 24px;
  }
`;

export const FooterContents = styled.div`
  width: 100%;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.grayscale03};
  padding-bottom: 60px;

  ${MEDIA.tablet} {
    flex-direction: column;
    padding-bottom: 36px;
  }
`;

export const CompanyInfo = styled.div``;

export const Logo = styled.div`
  width: 225px;
  height: 27px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Address = styled.address`
  font-size: 15px;
  line-height: 1.4;
  color: ${COLORS.grayscale03};
  margin-top: 20px;
`;

export const FooterNav = styled(Nav)`
  ul {
    border: 0px;
  }

  li {
    font-size: 20px;
    color: ${COLORS.grayscale02};
    line-height: 1.4;
    padding: 0px 18px;

    &::after {
      display: none;
    }

    &:last-of-type {
      padding: 0px 0px 0px 18px;
    }
  }

  ${MEDIA.tablet} {
    margin-top: 48px;
    li {
      &:first-of-type {
        padding-left: 0px;
      }
    }
  }

  ${MEDIA.mobile} {
    display: none;
  }
`;

export const FooterBot = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 60px;

  ${MEDIA.tablet} {
    flex-direction: column;
    padding-top: 36px;
  }
`;

export const CopyRight = styled.p`
  font-size: 15px;
  color: ${COLORS.grayscale03};
`;

export const SNS = styled.ul`
  display: flex;

  ${MEDIA.tablet} {
    margin-top: 24px;
  }
`;

export const SNSLi = styled.li`
  margin-left: 17px;

  svg {
    width: 22px;
    height: 22px;
  }

  &:first-of-type {
    margin-left: 0px;
  }
`;
