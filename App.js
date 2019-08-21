import React, { Component } from 'react'
import {Icon} from 'native-base'
import {Provider} from 'react-redux'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'

import AuthScreen from './src/auth/AuthScreen'
import ListKaryawan from './src/app/ListKaryawan'
import ProfileScreen from './src/app/ProfileScreen'
import AddKaryawan from './src/app/AddKaryawan'
import DetailKaryawan from './src/app/DetailKaryawan'

import STORE from './src/store/reducers/index'


const MainTab = createBottomTabNavigator(
  {
      Karywan: {
      screen: AddKaryawan,
      navigationOptions: {
        tabBarIcon: <Icon name='bookmarks'/>
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: <Icon name='Login'/>
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'grey'
    }
  }
)

const RootStack = createStackNavigator(
  {
    Auth: AuthScreen,
    Main: MainTab
  },
  {
    headerMode: 'none'
  }
)

const AppContainer = createAppContainer(RootStack)

class App extends Component {
  render (){
    return (
      <Provider store={STORE}>
        <AppContainer/>
      </Provider>
    )
  }
}


export default App