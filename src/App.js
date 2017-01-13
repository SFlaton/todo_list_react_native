import React, { Component } from 'react';
import { View } from 'react-native';
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
