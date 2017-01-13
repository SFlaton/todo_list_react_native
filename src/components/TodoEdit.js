import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import CheckBox from 'react-native-check-box';
import { Card, CardSection, Input, Button } from './common';

class TodoEdit extends Component {
  state = { title: this.props.todo, completed: this.props.completed }

  onPressDelete() {
    axios.delete(`http://localhost:3000/tasks/${this.props.id}`)
      .then(Actions.todoList({ type: 'reset' }))
  }

  onPressUpdate() {
    axios.put(`http://localhost:3000/tasks/${this.props.id}`, {task: { title: this.state.title, completed: this.state.completed }})
      .then(Actions.todoList({ type: 'reset' }))
  }

  onClick() {
    if (this.state.completed === false )
      this.setState({ completed: true })
    else {
      this.setState({ completed: false })
    }
  }

  render() {
    console.log(this.state)

    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.title}
            onChangeText={title => this.setState({ title })}
          />
        </CardSection>
          <Text>completed</Text>
          <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={completed => this.onClick()}
            isChecked={this.props.completed}
            rightText='completed'
            />
        <CardSection>

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
