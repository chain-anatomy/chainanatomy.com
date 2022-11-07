import classNames from "classnames"
import { slideClass, slideStyle } from "./SlideConfig"
import servicesSummary from './services-summary.png'


export default function Slide4() {
  return (
    <div className={classNames(slideClass, 'flex flex-col')} style={slideStyle}>

      <div className="flex flex-col text-center">
        <div className="text-main-green text-8xl font-bold">
          Fully Customized Services
        </div>
        <div className="text-main-green text-8xl font-bold mt-4">
          For Building Web3.0 Product
        </div>
      </div>

      <div className="flex justify-center my-20 w-full">
        <img className="object-contain w-full" src={servicesSummary} alt="services-summary" />
      </div>

    </div>
  )
}
