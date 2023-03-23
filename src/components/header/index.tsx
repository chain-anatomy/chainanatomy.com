import React from "react";

import MediaOnlyDiv from "components/common/mediaOnlyDiv";
import DesktopHeader from "./desktopHeader";
import MobileHeader from "./mobileHeader";

export interface HasNavProps {
  navList: {
    title: string;
    ref: React.RefObject<HTMLDivElement>;
  }[];
}

const Heaader: React.FC<HasNavProps> = ({ navList }) => {
  return (
    <>
      <MediaOnlyDiv media="desktop">
        <DesktopHeader navList={navList} />
      </MediaOnlyDiv>
      <MediaOnlyDiv media="tablet">
        <MobileHeader navList={navList} />
      </MediaOnlyDiv>
    </>
  );
};

export default Heaader;
