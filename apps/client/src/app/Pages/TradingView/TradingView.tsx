import React, { useState, useEffect } from 'react'
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
import { IconType } from 'react-icons/lib';
import { Widget } from '../../Components/WidgetCard/WidgetCard';

interface Widget {
  title: string
  count: string
  icon: IconType
  content: any
}

const widgetsAvailable: Widget[] = [
  {
    title: 'AdvancedChart',
    count: 'Trading',
    icon: FaMoneyCheckAlt,
    content: AdvancedChart,
  },
  {
    title: 'CryptoCalendar',
    count: 'Trading',
    icon: FaMoneyCheckAlt,
    content: CryptoCurrencyMarket,
  },
  {
    title: 'ForexCrossRates',
    count: 'Trading',
    icon: FaMoneyCheckAlt,
    content: ForexCrossRates,
  },
  {
    title: 'StockMarket',
    count: 'Trading',
    icon: FaMoneyCheckAlt,
    content: StockMarket,
  },
  {
    title: 'EconomicCalendar',
    count: 'Trading',
    icon: FaMoneyCheckAlt,
    content: EconomicCalendar,
  },
  {
    title: 'CompanyProfile',
    count: 'Trading',
    icon: FaMoneyCheckAlt,
    content: CompanyProfile,
  },
  {
    title: 'Screener',
    count: 'Trading',
    icon: FaMoneyCheckAlt,
    content: Screener,
  }
]


export const TradingViewPage = () => {
  const [widget, setwidget] = useState<Widget[]>([]);
  const style = { color: "var(--txt-color)", width: "25px", paddingTop: "7px"}
  
  const display = (title: string) => {
    if (title === "AdvancedChart")
      setwidget([...widget, widgetsAvailable[0]])
    else if (title === "CryptoCalendar")
      setwidget([...widget, widgetsAvailable[1]])
    else if (title === "ForexCrossRates")
      setwidget([...widget, widgetsAvailable[2]])
    else if (title === "StockMarket")
      setwidget([...widget, widgetsAvailable[3]])
    else if (title === "EconomicCalendar")
      setwidget([...widget, widgetsAvailable[4]])
    else if (title === "CompanyProfile")
      setwidget([...widget, widgetsAvailable[5]])
    else
      setwidget([...widget, widgetsAvailable[5]])
    localStorage.setItem('widgets_trading', JSON.stringify(widget))
  }

  const renderList =(item: any, index:any) => (
    <div onClick={() =>display(item.title)} key={index}>
      <WidgetItem>
        <i>{item.icon}</i>
        <span>{item.title}</span>
      </WidgetItem>
    </div>
  )

  useEffect(() => {
    const listSave = JSON.parse(localStorage.getItem('widgets_trading') || '[]');
    for (const item of listSave) {
      for (const widgetAvailable of widgetsAvailable) {
        if (item.title === widgetAvailable.title) {
          setwidget(widget => [...widget, widgetAvailable]);
        }
      }
    }
  }, [])

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
        {
          widget.map((item, i) => {
            return (
              <div>
                <Widget icon={item.icon} count={item.count} title={item.title} child={item.content}/>
              </div>
            )
          })
        }
      </Container>
    </>
  )
}