import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

import { useSetRecoilState } from "recoil";
import { sectionAtom } from "./recoil/section";

import useScrollTop from "hooks/useScrollTop";

import Heaader from "./components/header";
import Section1 from "./components/sections/section1";
import Section2 from "./components/sections/section2";
import CooperateSection from "components/sections/cooperate";
import Section4 from "components/sections/section4";
import Section5 from "components/sections/section5";
import Section6 from "components/sections/solver";
import Section7 from "components/sections/section7";
import Footer from "components/footer";

function App() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);
  const section7Ref = useRef<HTMLDivElement>(null);
  const setSection = useSetRecoilState(sectionAtom);
  const scollY = window.scrollY;
  const { scrollTop: section1Top } = useScrollTop(section1Ref, 0);
  const { scrollTop: section2Top } = useScrollTop(section2Ref, 0);
  const { scrollTop: section4Top } = useScrollTop(section4Ref, 0);
  const { scrollTop: section6Top } = useScrollTop(section6Ref, 0);
  const { scrollTop: section7Top } = useScrollTop(section7Ref, 0);

  const navList = [
    { title: "Home", ref: section1Ref },
    { title: "What we do", ref: section2Ref },
    { title: "How we work", ref: section4Ref },
    { title: "Team", ref: section6Ref },
    { title: "Contact us", ref: section7Ref },
  ];

  const handleClickTouchBtn = () => {
    section7Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (section1Top >= 0 && section2Top > 0) {
      setSection(0);
    } else if (section2Top <= 0 && section4Top > 0) {
      setSection(1);
    } else if (section4Top <= 0 && section6Top > 0) {
      setSection(2);
    } else if (section6Top <= 0 && section7Top > 0) {
      setSection(3);
    } else if (section7Top < scollY) {
      setSection(4);
    } else {
      setSection(0);
    }
  }, [section1Top, section2Top, section4Top, section6Top, section7Top]);

  return (
    <>
      <Helmet>
        <meta property="og:url" content={process.env.REACT_APP_APP_URL} />
      </Helmet>
      <Heaader navList={navList} />
      <Section1 ref={section1Ref} handleClickTouchBtn={handleClickTouchBtn} />
      <Section2 ref={section2Ref} />
      {/*<CooperateSection />*/}
      <Section4 ref={section4Ref} />
      <Section5 />
      <Section6 ref={section6Ref} />
      <Section7 ref={section7Ref} />
      <Footer navList={navList} />
    </>
  );
}

export default App;
