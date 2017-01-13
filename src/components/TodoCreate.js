import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Card, CardSection, Input, Button } from './common';

class TodoCreate extends Component {
  state = { title: '' }

  onPressSave() {
    axios.post('http://localhost:3000/tasks', { title: this.state.title })
      .then(Actions.todoList({ type: 'reset' }))

  }

  render() {
    console.log(this.state);

    return (
      <Card>
        <CardSection>
          <Input
            placeholder="New Task"
            value={this.state.title}
            onChangeText={title => this.setState({ title })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onPressSave.bind(this)}>Save</Button>
        </CardSection>
      </Card>
    );
  }
}

export default TodoCreate;
