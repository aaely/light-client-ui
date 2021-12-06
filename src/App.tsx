/* eslint-disable react/jsx-key */
import React from "react";
import { currentView } from './Recoil/router'
import { useTransition, animated } from 'react-spring'
import AminoBuilder from './Pages/AminoBuilder'
import CannabinoidBuilder from './Pages/CannabinoidBuilder';
import useChainListener from './hooks/useChainListener'
import useBalanceListener from './hooks/useBalanceListener';
import TerpeneBuilder from './Pages/TerpeneBuilder';
import UserRegistration from './Pages/UserRegistration.jsx';
import CannabisProductBuilder from './Pages/CannabisProductBuilder.jsx'
import Account from './Pages/Account';
import Landing from './Pages/Landing';
import Nav from './Components/Nav'
import PeptideBuilder from './Pages/PeptideBuilder.jsx';
import Products from './Pages/Products';
import Checkout from './Pages/Checkout.jsx';
import Orders from './Pages/Orders';
import { useRecoilValue } from 'recoil';
import useSubstrateEventListener from './hooks/useSubstrateEventListener'

const hashMap = new Map([
  ['aminoBuilder', <AminoBuilder/>],
  ['cannBuilder', <CannabinoidBuilder/>],
  ['terpBuilder', <TerpeneBuilder/>],
  ['userRegistration', <UserRegistration/>],
  ['account', <Account/>],
  ['landing', <Landing/>],
  ['cannabisProductBuilder', <CannabisProductBuilder/>],
  ['peptideBuilder', <PeptideBuilder/>],
  ['products', <Products/>],
  ['checkout', <Checkout/>],
  ['orders', <Orders/>],
])

function App() {

  useChainListener()
  useBalanceListener()
  useSubstrateEventListener()

  const view: string = useRecoilValue(currentView)
  

  const transition = useTransition(view, {
    from: {opacity: 0, scale: 0},
    enter: {opacity: 1, scale: 1},
    leave: {opacity: 0, scale: 0},
  })

  return transition((style, i) => {
    return (
      <div style={{position: 'absolute', width: '100vw', height: '100vh'}}>
      <Nav/>
        <animated.div style={style}>
          {hashMap.get(i)}
        </animated.div>
      </div>
    )
  })
}

export default App;
