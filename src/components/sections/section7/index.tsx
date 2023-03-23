import React, { forwardRef, useRef } from "react";

import * as S from "./style";

import useSendEmail from "hooks/useSendEmail";

import MediaBr from "components/common/mobileBr";
import TouchBtn from "components/common/touchBtn";
import { TitActive, TitBlack } from "components/common/sectionTit/style";
import SubmitModal from "components/common/submitModal";

const Section7 = forwardRef<HTMLElement>((props, ref) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { handleSubmit, isLoading, isSuccess, handleClose } =
    useSendEmail(formRef);

  return (
    <S.Section7 ref={ref}>
      <S.ContactUs>
        <S.GetInTouch>
          <S.CustomSectionTit>
            <TitBlack>G</TitBlack>
            <TitBlack>e</TitBlack>
            <TitBlack>t</TitBlack>
            &nbsp;
            <TitBlack>i</TitBlack>
            <TitBlack>n</TitBlack>
            &nbsp;
            <TitBlack>t</TitBlack>
            <TitBlack>o</TitBlack>
            <TitBlack>u</TitBlack>
            <TitBlack>c</TitBlack>
            <TitBlack>h</TitBlack>
            <br />
            <TitActive>w</TitActive>
            <TitActive>i</TitActive>
            <TitActive>t</TitActive>
            <TitActive>h</TitActive>
            &nbsp;
            <TitActive>u</TitActive>
            <TitActive>s</TitActive>
          </S.CustomSectionTit>
          <S.Desc>
            Chain Anatomy needs the contact&nbsp;
            <MediaBr media="desktop" />
            information you provide to us&nbsp;
            <MediaBr media="desktop" />
            to contact you about our products&nbsp;
            <MediaBr media="desktop" />
            and services.
          </S.Desc>
        </S.GetInTouch>
        <S.Form ref={formRef} onSubmit={handleSubmit}>
          <S.FormTop>
            <S.NameCtnr>
              <S.TitLabel>NAME*</S.TitLabel>
              <S.Input type="text" name="name" required />
            </S.NameCtnr>
            <S.EmailCtnr>
              <S.TitLabel>EMAIL*</S.TitLabel>
              <S.Input type="text" name="email" required />
            </S.EmailCtnr>
          </S.FormTop>
          <S.FormMid>
            <S.PhoneCtnr>
              <S.TitLabel>PHONE NUMBER*</S.TitLabel>
              <S.Input type="number" name="phonenumber" required />
            </S.PhoneCtnr>
          </S.FormMid>
          <S.FormBot>
            <S.TextAreaCtnr>
              <S.TitLabel>MESSAGE*</S.TitLabel>
              <S.TextArea name="message" required />
            </S.TextAreaCtnr>
          </S.FormBot>
          <S.TouchBtnCtnr>
            <TouchBtn onClick={() => {}} disabled={isLoading} />
          </S.TouchBtnCtnr>
        </S.Form>
      </S.ContactUs>
      <SubmitModal open={isSuccess} handleClose={handleClose} />
    </S.Section7>
  );
});

export default Section7;
