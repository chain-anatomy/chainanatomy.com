import styled from "@emotion/styled";

import { COLORS, MEDIA } from "config/styles";

import AnimationTit from "components/common/animateTit";
import SectionTit from "components/common/sectionTit";

export const Section7 = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 240px 0px 150px 0px;

  ${MEDIA.tablet} {
    padding: 240px 48px 150px 48px;
  }

  ${MEDIA.mobile} {
    padding: 100px 24px 60px 24px;
  }
`;

export const ContactUs = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: ${COLORS.grayscale02};
  padding: 64px 84px;

  ${MEDIA.tablet} {
    flex-direction: column;
  }

  ${MEDIA.mobile} {
    border-radius: 20px;
    padding: 24px;
  }
`;

export const GetInTouch = styled.div``;

export const CustomSectionTit = styled(SectionTit)`
  font-size: 64px;
  color: ${COLORS.grayscale06};

  ${MEDIA.mobile} {
    font-size: 36px;
    text-align: center;
  }
`;

export const Desc = styled(AnimationTit)`
  font-size: 24px;
  color: ${COLORS.grayscale04};
  margin-top: 24px;

  ${MEDIA.mobile} {
    font-size: 24px;
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 64px;

  ${MEDIA.tablet} {
    margin: 48px 0px 0px 0px;
  }

  ${MEDIA.tablet} {
    margin: 12px 0px 0px 0px;
  }
`;

export const FormTop = styled.div`
  display: flex;

  ${MEDIA.mobile} {
    flex-direction: column;
  }
`;

export const InputCtnr = styled.div`
  display: flex;
  border-bottom: 1px solid ${COLORS.grayscale06};
`;

export const NameCtnr = styled(InputCtnr)`
  width: 293px;

  ${MEDIA.tablet} {
    width: calc(50% - 8px);
  }

  ${MEDIA.mobile} {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 24px;
  }
`;

export const EmailCtnr = styled(InputCtnr)`
  width: 293px;
  margin-left: 16px;
  ${MEDIA.tablet} {
    width: calc(50% - 8px);
  }

  ${MEDIA.mobile} {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 24px 0px 0px 0px;
  }
`;

export const FormMid = styled.div`
  margin-top: 17px;
`;

export const PhoneCtnr = styled(InputCtnr)`
  width: 100%;

  ${MEDIA.mobile} {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }
`;

export const FormBot = styled.div`
  margin-top: 17px;
`;

export const TitLabel = styled.label`
  color: ${COLORS.grayscale06};
  padding: 20px 0px;

  ${MEDIA.mobile} {
    padding: 0px 0px 24px 0px;
  }
`;

export const Input = styled.input`
  width: fit-content;
  margin-left: 20px;

  ${MEDIA.mobile} {
    width: 100%;
    margin-left: 0px;
  }
`;

export const TextAreaCtnr = styled.div`
  display: flex;
  flex-direction: column;

  ${MEDIA.mobile} {
    margin-top: 24px;
  }
`;

export const TextArea = styled.textarea`
  height: 71px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${COLORS.grayscale06};
  resize: none;

  ${MEDIA.mobile} {
    height: 48px;
  }
`;

export const TouchBtnCtnr = styled.div`
  align-self: flex-end;
  margin-top: 40px;

  ${MEDIA.mobile} {
    align-self: center;
  }
`;
