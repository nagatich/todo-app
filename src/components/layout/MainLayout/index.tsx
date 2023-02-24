import * as React from 'react'

import Header from '../common/Header'

import { MainLayoutContainer } from './styles'

const MainLayout: React.FC = ({ children }) => {
  console.log('layout')
  return (
    <MainLayoutContainer>
      <Header />
      { children }
    </MainLayoutContainer>
  )
}

export default MainLayout
