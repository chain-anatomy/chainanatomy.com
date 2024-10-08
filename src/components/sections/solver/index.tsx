import React, { forwardRef } from 'react';

import * as S from './style';

import BgImg from 'assets/images/section6/bg.png';
import MediaBr from 'components/common/mobileBr';

import { TitActive, TitBasic } from 'components/common/sectionTit/style';

const memberInfo = [
  {
    position: 'CEO',
    name: 'Jongun Choi',
    careers: [
      'Gangwon Science High School',
      'Korea University. Mechanical Engineering',
      'Former) ABC QUANT(Shenzen, China) Founding Member',
      'Former) MMX, Web3.0 Senior director',
      'Former) MONOSIG Investment Mange dept. Executive director',
    ],
    works: [
      'On-chain, Off-chain algorithm',
      'Trading strategy Management',
      'Web3.0 service planning & operating',
    ],
  },
  {
    position: 'COO',
    name: 'Yousang Jo',
    careers: [
      'Gangwon Science High School',
      'KAIST. M.S. Management engineering(Finance)',
      'Former) Kyobo Life Investment Manage dept',
      'Former) MONOSIG Quant 1 Team',
    ],
    works: [
      'On-chain, Off-chain algorithm',
      'Trading strategy Management',
      'On-chain data analysis products planning',
      'Web3.0 Tokenomics analytics & valuation',
      'Financial data analysis',
    ],
  },
  {
    position: 'CTO',
    name: 'Namhoon Kim',
    careers: [
      'Mechanical Engineering from Konkuk University - NHN NEXT',
      'Former) Tech Lead at Coupang and Woowa Brothers Corp',
      'Former) Co-founder and Team Lead Developer at Recover39',
      'Former) MONOSIG Quant 1 Team',
    ],
    works: [
      'Service architect / DevOps',
      'Fullstack Developer',
      'Smart contract (Solidity)',
      'Quant / Defi system',
    ],
  },
  {
    position: 'CPO',
    name: 'Endy G.',
    careers: [
      'Former) Monosig Product Owner',
      'Former) CLASSUM Global Marketing Specialist',
      'Former) LNX Protocol Strategy Partner',
      'Former) P.A. Concept Head of E-commerce',
      'Former) Daewonplus Construction Intl Business Manager',
      'Former) Lion Security Intl Sales',
    ],
    works: [
      'In crypto since 2017',
      'On/Off-chain data analysis',
      'Performance and content marketing',
      'UX/UI design',
    ],
  },
  {
    position: 'Software Engineer',
    name: 'IkSung Jo',
    careers: [
      'Incheon Science High School',
      'KAIST. Computer Science',
      'Former) NHN NEXT. Game Server Programming',
      'Former) FunAt. Softeware Engineer',
      'Former) Randebu. Softeware Engineer, co-founder',
      'Former) Ruby Groupe. System Engineer',
    ],
    works: [
      'Android application Development (Java)',
      'Hybrid mobile application Development (Ionic framework/angular JS)',
      'Mobile application Backend Development (C#)',
      'e-Commerce Development (Saleforce platform/Rhino JS)',
    ],
  },
  {
    position: 'Software Engineer',
    name: 'JongSung Hwang',
    careers: [
      'NHN NEXT',
      'Former) NHN Entertainment Developer',
      'Former) SUPERCAT Game Content Dev. Part Leader',
      'Former) MONOSIG Quant 1 Team',
    ],
    works: [
      'Quant system Development',
      'DeFi platform Development (Solidity)',
      'Web Backend Development (Nodejs/TypeScript)',
      'Web Frontend Development (React/TypeScript)',
    ],
  },
  {
    position: 'Software Engineer',
    name: 'InHo Jeong',
    careers: [
      'Computer Science from Ajou University',
      'NHN Next (NEXT Institute)',
      'Former) NHN Entertainment Developer',
      'Former) Neptune. Game Develop Team',
      'Former) Nimble Neuron. Game Develop Team',
      'Former) Neowiz. Game Develop Team',
      'Former) Monosig. Quant 1 Team Web3.0 and Web 2.0 Development',
    ],
    works: [
      'Smart Contract Contract (Solidity)',
      'Blockchain Node Operating (ethereum/klaytn/hyperledger)',
      'NodeJS Backend Framework',
      'React.js Frontend Framework',
    ],
  },
  {
    position: 'Software Engineer, Data Engineer',
    name: 'Youn Yi',
    careers: ['Electrical and Computer Engineering, Seoul National University'],
    works: ['Data Engineering (ML/DL)', 'Backend development'],
  },
  {
    position: 'Software Engineer',
    name: 'Yoonsoo Kim',
    careers: [
      'Korea University. Material Science and Engineering',
      'Former) Van-F. Software Engineer',
    ],
    works: [
      'Smart Contract Contract (Solidity)',
      'Web Backend Development (Nodejs/TypeScript)',
      'Web Frontend Development (React, Next.js/TypeScript)',
    ],
  },
  {
    position: 'Software Engineer',
    name: 'ByeongHun Kim',
    careers: [
      'Jeonbuk National University',
      'Annoymous Team, BNBChain Hackathon Track3 : Lifestyle in Web3 - 3rd Place',
      'Contract Team, 3rd Term of Korea University Blockchain Society',
    ],
    works: [
      'Web Backend Development (Nodejs/TypeScript)',
      'Blockchain Node Operating (ethereum/klaytn/hyperledger)',
      'Smart Contract (solidity)',
    ],
  },
];

const Section6 = forwardRef<HTMLElement>((props, ref) => {
  return (
    <S.Section6 ref={ref}>
      <S.BgImg>
        <img src={BgImg} alt='Donut structure' />
      </S.BgImg>
      <S.SectionCtnr>
        <S.CustomSectionTit>
          <TitBasic>T</TitBasic>
          <TitBasic>h</TitBasic>
          <TitBasic>e</TitBasic>
          &nbsp;
          <TitBasic>W</TitBasic>
          <TitBasic>e</TitBasic>
          <TitBasic>b</TitBasic>
          <TitBasic>3</TitBasic>
          <TitBasic>.</TitBasic>
          <TitBasic>0</TitBasic>
          <br />
          <TitActive>P</TitActive>
          <TitActive>r</TitActive>
          <TitActive>o</TitActive>
          <TitActive>b</TitActive>
          <TitActive>l</TitActive>
          <TitActive>e</TitActive>
          <TitActive>m</TitActive>
          &nbsp;
          <MediaBr media='mobile' />
          <TitActive>S</TitActive>
          <TitActive>O</TitActive>
          <TitActive>L</TitActive>
          <TitActive>V</TitActive>
          <TitActive>E</TitActive>
          <TitActive>R</TitActive>
          <TitActive>S</TitActive>
        </S.CustomSectionTit>
        <S.Desc>
          Chain Anatomy brings together Korea's top class blockchain experts and
          financial experts.
          <br />
          Blockchain specialized programming, dAPP Development, Project
          consulting and Management.
          <br />
          <br />A team that can support everything you need to succeed in the
          Web3.0 market.
        </S.Desc>
        <S.Experts>
          {memberInfo.map(({ position, name, careers, works }, index) => (
            <S.Member key={index}>
              <S.MemberTop>
                <S.Position>{position}</S.Position>
                <S.Name>{name}</S.Name>
              </S.MemberTop>
              <S.Creers>
                {careers.map((career, index) => (
                  <S.Creer key={index}>{career}</S.Creer>
                ))}
              </S.Creers>
              <S.Works>
                {works.map((work, index) => (
                  <S.Work key={index}>
                    {work.split('\n').map((line, index) => (
                      <div key={index}>
                        {line}
                        <br />
                      </div>
                    ))}
                  </S.Work>
                ))}
              </S.Works>
            </S.Member>
          ))}
        </S.Experts>
      </S.SectionCtnr>
    </S.Section6>
  );
});

export default Section6;
