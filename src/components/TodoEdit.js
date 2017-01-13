import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Card, CardSection, Input, Button } from './common';

class TodoEdit extends Component {
  state = { title: this.props.todo }

  onPressDelete() {
    axios.delete(`http://localhost:3000/tasks/${this.props.id}`)
      .then(Actions.todoList({ type: 'reset' }))
  }

  onPressUpdate() {
    axios.put(`http://localhost:3000/tasks/${this.props.id}`, {task: { title: this.state.title }})
      .then(Actions.todoList({ type: 'reset' }))
  }

  render() {
    console.log(JSON.stringify(this.state.title))

    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.title}
            onChangeText={title => this.setState({ title })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onPressUpdate.bind(this)}>Update Task</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onPressDelete.bind(this)}>Delete Task</Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  cardSectionTextStyle: {
    fontSize: 24,
    fontWeight: 'bold'
  }
}

export default TodoEdit;
