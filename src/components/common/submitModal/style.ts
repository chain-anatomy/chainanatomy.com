import styled from "@emotion/styled";

import { COLORS } from "config/styles";

export const ModalTextCtnr = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  background-color: ${COLORS.grayscale01};
  border-radius: 8px;
  padding: 20px;
`;

export const ModalText = styled.p`
  color: ${COLORS.grayscale06};
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
`;
