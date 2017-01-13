import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Card, CardSection, Input, Button } from './common';

class TodoEdit extends Component {
  onPressDelete() {
    axios.delete(`http://localhost:3000/tasks/${this.props.id}`)
      .then(Actions.todoList())
  }

  onChangeCompleted() {
    if (this.props.completed === true )

  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text style={styles.cardSectionTextStyle}>{this.props.todo}</Text>
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
