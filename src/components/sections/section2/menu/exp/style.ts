import styled from "@emotion/styled";

import { COLORS, MEDIA } from "config/styles";

import { ReactComponent as ArrowImg } from "assets/images/section2/arrow.svg";

export const Exp = styled.div`
  display: flex;
`;

export const Arrow = styled(ArrowImg)`
  width: 23px;
  height: 29px;
  margin-right: 8px;
`;

export const TextCtnr = styled.div`
  width: fit-content;
`;

export const Tit = styled.div`
  font-family: "AlliancePlattMedium";
  font-size: 24px;
  color: ${COLORS.grayscale06};

  ${MEDIA.mobile} {
    font-size: 20px;
  }
`;

export const DescCtnr = styled.div<DescProps>`
  display: ${({ type }) => (type === "column" ? "flex" : "block")};
  flex-wrap: ${({ type }) => (type === "column" ? "wrap" : "nowrap")};

  > div {
    display: flex;
    width: ${({ type }) => (type === "column" ? "50%" : "inheit")};
    margin-top: 8px;
  }

    span {
      font-weight: 700;
      font-size: 10px;
      color: ${COLORS.primary1};
      margin-right: 8px;
    }
  }

  ${MEDIA.mobile} {
    > div {
      font-size: 16px;
    }
  }
`;

interface DescProps {
  type: "row" | "column";
}

export const Desc = styled.div<DescProps>`
  font-size: 20px;
  color: ${COLORS.grayscale03};

  ${MEDIA.mobile} {
    font-size: 16px;
  }
`;
