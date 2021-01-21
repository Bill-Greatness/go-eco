import React from 'react'

import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {Main} from './main'

export default function App() {
  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  )
}