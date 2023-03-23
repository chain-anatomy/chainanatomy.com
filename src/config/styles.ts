import { keyframes } from "@emotion/react";

export const COLORS = {
  primary1: "#43C6AC",
  primary2: "#649C91",
  primary3: "#2B6D60",
  grayscale01: "#EFEFEF",
  grayscale02: "#D9D9D9",
  grayscale03: "#929295",
  grayscale04: "#3A3A3E",
  grayscale05: "#232325",
  grayscale06: "#1C1C1E",
};

export const MEDIA = {
  desktop: "@media only screen and (min-width: 1205px)",
  tablet: "@media only screen and (max-width: 1204px)",
  mobile: "@media only screen and (max-width: 768px)",
};

export const SHADOW = {
  basic: "4px 4px 20px rgba(0, 0, 0, 0.25)",
  dashboard: "4.60714px 9.98214px 16.125px rgba(0, 0, 0, 0.2)",
};

export const ANIMATIONS = {
  fadeInLeft: keyframes`0% { opacity: 0;
    transform: translate3d(-100%, 0, 0); } 100% { opacity: 1;
    transform: translate3d(0, 0, 0); }`,
  fadeInUp: keyframes`0% { opacity: 0;
      transform: translate3d(0, 50%, 0); } 100% { opacity: 1;
      transform: translate3d(0, 0, 0); }`,
  fadeIn: keyframes`0% { padding-right: 101px; } 100% { padding-right: 201px; }`,
  fadeOut: keyframes`0% { padding-right: 201px; } 100% { padding-right: 101px; }`,
  rotateClockwise: keyframes`0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }`,
  rotateCounterClockwise: keyframes`0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); }`,
  opacity: keyframes`0% { opacity: 0.1; } 100% { opacity: 1; }`,
};
