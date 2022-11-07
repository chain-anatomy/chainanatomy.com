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
  return (
    <div id="services" className="snap-center shrink-0 flex flex-col w-full">
      <h1 className="text-center text-main-green">{props.title}</h1>

      <div className="relative flex-1 flex flex-row mt-12 pl-20">
        { props.imageDirection === 'left' && (
          <div className="flex-1 flex justify-center justify-items-center px-40">
            <img className="object-contain" src={props.imageSrc} alt="" />
          </div>
        )}

        <div className="flex-1">
          { props.descriptions.map(description => (
            <div className="flex flex-col mb-8">
              <h3>{description.listLabel}</h3>
              <ul className="marker:text-main-gray list-disc pl-6">
                {description.listItems.map(item => (
                  <li className="text-main-gray text-2xl">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        { props.imageDirection === 'right' && (
          <div className="flex-1 flex justify-center justify-items-center px-40">
            <img className="object-contain" src={props.imageSrc} alt="" />
          </div>
        )}
      </div>
    </div>
  )
}

export default function Slide5() {
  return (
    <div className={classNames(slideClass, 'flex flex-row my-24 snap-x snap-mandatory overflow-y-none overflow-x-scroll')}
         style={{ ...slideStyle, justifyContent: 'start' }}>

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
  )
}
