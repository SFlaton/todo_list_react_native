import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers  from './reducers';
import { Header } from './components/common';
import TodoList from './components/TodoList';
import Router from './Router';

class App extends  Component {
  render() {

    return (
      <View style={{flex: 1}}>
        <Router />
      </View>
    );
  }
}

export default App;
