import React, { Component } from 'react'
import MainPage from './MainPage';
import { Provider } from "react-redux"
import store from "./reduxManager"

export default class Main extends Component {

  render() {
    return (<Provider store={store}>
      <MainPage />
    </Provider>)
  }
}

