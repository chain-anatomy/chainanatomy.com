import { useState } from 'react'
import classNames from "classnames"
import { slideClass, slideStyle } from "./SlideConfig"
import earthFrame from './earth-frame.png'
import infrastructure from './infrastructure.png'
import web3 from './web3.png'
import liveOps from './liveops.png'


type Slide5ContainerProps = {
  title: string,
  imageDirection: 'left' | 'right',
  imageSrc: string,
  descriptions: Array<{ listLabel: string, listItems: Array<string> }>
}

function Slide5Container(props: Slide5ContainerProps) {
  function ServiceImage() {
    return (
      <div className="flex items-center">
        <img className="" style={{ height: '460px' }} src={props.imageSrc} alt="" />
      </div>
    )
  }

  return (
    <div id="services" className="relative snap-center shrink-0 flex flex-col w-full overflow-hidden px-40">
      <h1 className="text-center text-main-green">{props.title}</h1>

      <div className="relative flex flex-row justify-evenly mt-12 mb-32">
        { props.imageDirection === 'left' && <ServiceImage />}

        <div className="flex flex-col justify-center">
          { props.descriptions.map((description, idx) => (
            <div className={classNames("flex flex-col", { "mb-8": idx !== props.descriptions.length - 1 })}>
              <h3>{description.listLabel}</h3>
              <ul className="marker:text-main-gray list-disc pl-6">
                {description.listItems.map(item => (
                  <li className="text-main-gray text-2xl">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        { props.imageDirection === 'right' && <ServiceImage />}
      </div>

    </div>
  )
}

export default function Slide5() {
  const [slidePos, setSlidePos] = useState(0)  // 0, 1, 2, 3

  const handlerScroll = e => {
    const slidesTotalWidth = e.target.offsetWidth
    const scrollPosX = e.target.scrollLeft
    const calibratePosX = slidesTotalWidth / 4

    setSlidePos(Math.floor((scrollPosX + calibratePosX) / slidesTotalWidth))
  }

  return (
    <div className={classNames(slideClass, 'relative flex flex-row my-24')} style={slideStyle}>

      <div className="flex flex-row snap-x snap-mandatory overflow-y-none overflow-x-scroll" onScroll={handlerScroll}>
        <Slide5Container
          title="Strategy / Operation"
          imageDirection="right"
          imageSrc={earthFrame}
          descriptions={[{
            listLabel: "Project System Architecture",
            listItems: [
              "Blockchain Service flow",
              "Data source managing plan",
              "Blockchain project tokenomics",
              "Server Database",
            ],
          }, {
            listLabel: 'On/Off-chain interaction plan',
            listItems: [
              'Blockchain component customizing',
              'NFT-fi / Staking',
              'Lending / NFT Dao',
            ],
          }, {
            listLabel: 'NFT functions',
            listItems: [
              'Merge',
              'Split',
              'Breeding',
            ],
          }]}
        />

        <Slide5Container
          title="Infrastructure"
          imageDirection="left"
          imageSrc={infrastructure}
          descriptions={[{
            listLabel: 'Node Operating',
            listItems: ['ethereum, klaytn, matic, solana, bsc, etc'],
          }, {
            listLabel: 'IPFS Operating',
            listItems: [
              'ipfs private gateway',
              'ipfs-metadata management',
            ],
          }, {
            listLabel: 'Public Cloud Management (AWS)',
            listItems: [
              'Domain Management',
              'Backend Server Management',
              'S3 Data Management',
            ],
          }]}
        />

        <Slide5Container
          title="Web 3.0"
          imageDirection="right"
          imageSrc={web3}
          descriptions={[{
            listLabel: 'Custom Smart Contract',
            listItems: [
              '[Publishing] ERC20, ERC721, ERC1155, ERC5114 / etc',
              '[Publishing] vesting, locking, upgradable (proxy), DAO',
              '[Publishing] NFT merge / split',
              '[DeFi] swap, staking, lending',
            ],
          }, {
            listLabel: 'Service',
            listItems: [
              'On/off chain bridging api',
              'on-chain data sync',
              'on-chain event publishing',
              'on-chain data indexing / searching',
            ],
          }, {
            listLabel: 'Marketplace',
            listItems: [
              'Simple marketplace (smart contract only)',
              'Gas optimized marketplace (wyvern/seaport protocol)',
            ],
          }]}
        />

        <Slide5Container
          title="Web 3.0 LiveOps"
          imageDirection="right"
          imageSrc={liveOps}
          descriptions={[{
            listLabel: 'Live Token distribution',
            listItems: [
              'Visualization where token transfer',
            ],
          }, {
            listLabel: 'Token/Contract flow',
            listItems: [
              'Live data for each contract',
              'Supply monitor - incentive viewer',
              'Burn monitor - breeding fee, market fee, function fee, etc',
              'LP size tracker',
            ],
          }, {
            listLabel: 'Target management',
            listItems: [
              'Price targeting',
              'Inflation targeting',
              'Tx management',
            ],
          }]}
        />
      </div>

      <div className="absolute left-1/2 bottom-8 -translate-x-1/2">
          <div className="flex space-x-4">
            <div className={classNames("w-4 h-4 rounded-full", { 'bg-main-gray': slidePos !== 0, 'bg-main-green': slidePos === 0})} />
            <div className={classNames("w-4 h-4 rounded-full", { 'bg-main-gray': slidePos !== 1, 'bg-main-green': slidePos === 1})} />
            <div className={classNames("w-4 h-4 rounded-full", { 'bg-main-gray': slidePos !== 2, 'bg-main-green': slidePos === 2})} />
            <div className={classNames("w-4 h-4 rounded-full", { 'bg-main-gray': slidePos !== 3, 'bg-main-green': slidePos === 3})} />
          </div>
      </div>

    </div>
  )
}
