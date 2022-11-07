import classNames from "classnames"
import { slideClass, slideStyle } from "./SlideConfig"


export default function Slide3() {
  return (
    <div id="who-we-are" className={classNames(slideClass, 'flex flex-row')} style={slideStyle}>

      <div className="flex-1 flex flex-col justify-center justify-item-center text-3xl pl-12">
        <h1>Who We Are</h1>
        <div className="mt-20">
          <div>Chain Anatomy is a Korea's</div>
          <div>Leading Blockchain Technology Company</div>
          <div>We Solve Problems and Build Products</div>
        </div>
        <div className="mt-8">
          <div>Our Mission Is To Connect Ideas To Web 3.0.</div>
          <div>And By Doing So, We Bring A Surprise To The World</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center text-center text-main-green">
        <div className="border-main-green border-l pl-8" style={{ fontSize: '6rem', fontWeight: '900', lineHeight: '10rem' }}>The Problem</div>
        <div className="border-main-green border-l pl-8" style={{ fontSize: '6rem', fontWeight: '900', lineHeight: '10rem' }}>SOLVERS</div>
      </div>

    </div>
  )
}
