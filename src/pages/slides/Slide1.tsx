import classNames from "classnames";
import BigLogo from "./big-logo.png";
import { slideClass, slideStyle } from "./SlideConfig";

export default function Slide1() {
  return (
    <div className={classNames(slideClass, 'flex-col')} style={slideStyle}>
      <div className="flex justify-center mx-auto w-4/5">
        <img className="object-contain w-full" src={BigLogo} alt="" />
      </div>
      <div className="mt-10 text-center text-4xl">
        Blockchain Vanguard, Best Guidance For Web 3.0
      </div>
    </div>
  )
}
