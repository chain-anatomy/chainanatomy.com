import classNames from "classnames"
import { slideClass, slideStyle } from "./SlideConfig"
import sentinelPreview from "../../sentinel-preview.png"
import liveOpsPreview from "../../liveops-preview.png"
import { useState } from "react"


type Preview = 'sentinel' | 'liveOps'

type Slide2Props = {
  id?: string,
}

export default function Slide2(props: Slide2Props) {
  const [activePreview, setActivePreview] = useState<Preview>('sentinel');

  return (
    <div id={props.id} className={classNames(slideClass, 'flex flex-row')} style={slideStyle}>
      <div className="flex-none flex flex-col justify-center mr-40">
        <div>
          <div>
            <h2 className="leading-10">Trusted Solutions</h2>
            <h2>For Trusted System</h2>
          </div>
          <div className="mt-8">
            <div className="text-3xl font-medium">Solve Every Existing Problems in</div>
            <div className="text-3xl font-medium">Web3.0 industry Through Data Analysis</div>
          </div>
        </div>

        <div className="mt-5">
          <span
            className={classNames("inline-block px-5 py-2 text-2xl text-main-black rounded select-none ease-out duration-300", {'bg-main-green': activePreview === 'sentinel', 'bg-main-white': activePreview !== 'sentinel'})}
            onMouseEnter={() => setActivePreview('sentinel')}
          >
            Sentinel Alert
          </span>
        </div>

        <div className="mt-4">
          <div className="text-2xl">Real-time Risk Detection System</div>
          <div className="text-2xl">For the Web 3.0 Product Operations</div>
        </div>

        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
        </div>

        <div className="mt-10">
          <span
            className={classNames("inline-block px-5 py-2 text-2xl text-main-black rounded select-none ease-out duration-300", {'bg-main-green': activePreview === 'liveOps', 'bg-main-white': activePreview !== 'liveOps'})}
            onMouseEnter={() => setActivePreview('liveOps')}
          >
            Web3.0 LiveOps
          </span>
        </div>

        <div className="mt-4">
          <div className="text-2xl">On-chain Data Analysis Dashboard</div>
          <div className="text-2xl">With Strategy Execution Tool</div>
        </div>
      </div>

      <div className="relative flex justify-center justify-items-center">
        <img className="object-contain ease-out duration-300" style={{ height: activePreview === 'sentinel' ? 'auto' : 0, opacity: activePreview === 'sentinel' ? 1 : 0 }} src={sentinelPreview} alt="sentinel-preview" />
        <img className="object-contain ease-out duration-300" style={{ height: activePreview === 'liveOps' ? 'auto' : 0, opacity: activePreview === 'liveOps' ? 1 : 0  }} src={liveOpsPreview} alt="liveOps-preview" />
      </div>
    </div>
  )
}
