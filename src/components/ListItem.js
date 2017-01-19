import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableOpacity} from 'react-native';
import { Card, CardSection, Button } from './common';
import TodoList from './TodoList';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  onPressList() {
    Actions.todoList()
  }

  render() {
    const completed = this.props.completed;

    return (
      <Card>
        <CardSection>
          <Text>{this.props.todo}</Text>
        </CardSection>

        <CardSection>
          <Text>{completed ? 'Completed!' : 'in progress...'}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={this.onPressList.bind(this)}>Back to task list</Button>
        </CardSection>
      </Card>
    );
  }
}

export default ListItem;
