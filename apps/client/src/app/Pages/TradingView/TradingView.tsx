import React, { useState } from 'react'
import { SideBar } from '../../Components/Sidebar/Sidebar';
import styled from 'styled-components';
import { TopBar } from '../../Components/TopBar/Topbar';
import { TradingChart } from '../../Components/Trading/TradingGraph';
import { ForexCrossRates } from '../../Components/Trading/ForexCrossRates'
import { Chart } from '../../Components/Trading/Chard';
import { StockMarket } from '../../Components/Trading/StockMarket';
import { EconomicCalendar } from '../../Components/Trading/EconomicCalendar';
import { Screener } from '../../Components/Trading/Screener'
import { TechnicalAnalysis } from '../../Components/Trading/TechnicalAnalyse';
import { AdvancedChart } from '../../Components/Trading/AdvancedChart';
import { CompanyProfile } from '../../Components/Trading/CompanyProfile';
import { CryptoCurrencyMarket } from '../../Components/Trading/Crypto';
import { Dropdown } from '../../Components/DropDown/DropDown';
import { IoIosAdd } from 'react-icons/io';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import {
  Container,
  Add,
  WidgetItem
} from '../styled'

import {
  WidgetCard, 
  WidgetCardIcon, 
  WidgetCardInfo,
  WidgetCardContent,
  WidgetCardTop,
} from '../../Components/WidgetCard/styled';
import { IconType } from 'react-icons/lib';
import { WidgetRe } from '../../Components/WidgetCard/WidgetCard';
import { Rnd } from 'react-rnd';

interface Widget {
  title: string
  count: string
  icon: IconType
  content: any
}

const widgetsAvailable: Widget[] = [
  {
    title: 'AdvancedChart',
    count: 'test',
    icon: FaMoneyCheckAlt,
    content: AdvancedChart,
  },
  {
    title: 'CryptoCalendar',
    count: 'test',
    icon: FaMoneyCheckAlt,
    content: CryptoCurrencyMarket,
  },
]

const styleWidget = {
  padding: "30px",
  height: "fit-content",
  width: "6000px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "var(--main-bg)",
  boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2)",
  borderRadius: "10px",
  position: "relative",
  overflow: "hidden",
  zIndex: 1,
  transition: "color 0.5s ease 0s",
  marginBottom: "30px",
  color: "var(--txt-color)"
} as const


export const TradingViewPage = () => {
  const [widget, setwidget] = useState<Widget[]>([]);
  const style = { color: "var(--txt-color)", width: "25px", paddingTop: "7px"}
  
  const display = (title: string) => {
    if (title === "AdvancedChart")
      setwidget([...widget, widgetsAvailable[0]])
    else if (title === "CryptoCalendar")
      setwidget([...widget, widgetsAvailable[1]])
  }

  const renderList =(item: any, index:any) => (
    <div onClick={() =>display(item.title)} key={index}>
      <WidgetItem>
        <i>{item.icon}</i>
        <span>{item.title}</span>
      </WidgetItem>
    </div>
  )

  return (
    <>
      <SideBar />
      <Container>
        <TopBar />
        <Add>
          <Dropdown
              icon= {<IoIosAdd style={style}/>}
              contentData={widgetsAvailable}
              renderItems={(item: any, index:any) => renderList(item, index)}
            />
        </Add>
        <Container>
          <Rnd style={styleWidget} minHeight={600} minWidth={950}>
            <WidgetCardTop>
              <WidgetCardIcon>
                {React.createElement(FaMoneyCheckAlt)}
              </WidgetCardIcon>
            <WidgetCardInfo>
              <h4>Crypto</h4>
              <span>Trading</span>
            </WidgetCardInfo>
            </WidgetCardTop>
            <WidgetCardContent>
              <AdvancedChart />
            </WidgetCardContent>
          </Rnd>
        </Container>
        <Container>
          <Rnd style={styleWidget} minHeight={600} minWidth={950}>
            <WidgetCardTop>
              <WidgetCardIcon>
                {React.createElement(FaMoneyCheckAlt)}
              </WidgetCardIcon>
            <WidgetCardInfo>
              <h4>Crypto</h4>
              <span>Trading</span>
            </WidgetCardInfo>
            </WidgetCardTop>
            <WidgetCardContent>
              <ForexCrossRates />
            </WidgetCardContent>
          </Rnd>
        </Container>
        <Container>
          <Rnd style={styleWidget} minHeight={600} minWidth={950}>
            <WidgetCardTop>
              <WidgetCardIcon>
                {React.createElement(FaMoneyCheckAlt)}
              </WidgetCardIcon>
            <WidgetCardInfo>
              <h4>Crypto</h4>
              <span>Trading</span>
            </WidgetCardInfo>
            </WidgetCardTop>
            <WidgetCardContent>
              <StockMarket />
            </WidgetCardContent>
          </Rnd>
        </Container>
        <Container>
          <Rnd style={styleWidget} minHeight={600} minWidth={950}>
            <WidgetCardTop>
              <WidgetCardIcon>
                {React.createElement(FaMoneyCheckAlt)}
              </WidgetCardIcon>
            <WidgetCardInfo>
              <h4>Crypto</h4>
              <span>Trading</span>
            </WidgetCardInfo>
            </WidgetCardTop>
            <WidgetCardContent>
              <EconomicCalendar />
            </WidgetCardContent>
          </Rnd>
        </Container>
        <Container>
          <Rnd style={styleWidget} minHeight={600} minWidth={950}>
            <WidgetCardTop>
              <WidgetCardIcon>
                {React.createElement(FaMoneyCheckAlt)}
              </WidgetCardIcon>
            <WidgetCardInfo>
              <h4>Crypto</h4>
              <span>Trading</span>
            </WidgetCardInfo>
            </WidgetCardTop>
            <WidgetCardContent>
              <Screener />
            </WidgetCardContent>
          </Rnd>
        </Container>
        <Container>
          <Rnd style={styleWidget} minHeight={600} minWidth={950}>
            <WidgetCardTop>
              <WidgetCardIcon>
                {React.createElement(FaMoneyCheckAlt)}
              </WidgetCardIcon>
            <WidgetCardInfo>
              <h4>Crypto</h4>
              <span>Trading</span>
            </WidgetCardInfo>
            </WidgetCardTop>
            <WidgetCardContent>
              <CryptoCurrencyMarket />
            </WidgetCardContent>
          </Rnd>
        </Container>
        {/* <ForexCrossRates />
        <Chart />
        <StockMarket />
        <EconomicCalendar />
        <Screener />
        <TechnicalAnalysis />
        <AdvancedChart />
        <CompanyProfile />
        <CryptoCurrencyMarket /> */}
      </Container>
    </>
  )
}