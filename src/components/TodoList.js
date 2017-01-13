import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Card, CardSection, Button } from './common';
import ListItem from './ListItem';

class TodoList extends Component {
  state = { list: [] };

  componentWillMount() {
    axios.get('http://localhost:3000/tasks')
      .then(response => this.setState({ list: response.data.tasks }));
  }

  renderList() {
    return this.state.list.map(task =>
      <TouchableOpacity key={task.id} onPress={() => Actions.todoEdit({id: task.id, todo: task.title, completed: task.completed})}>
        <Card>
          <CardSection>
            <Text>{task.title}</Text>
          </CardSection>
        </Card>
      </TouchableOpacity>
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        { this.renderList() }
      </ScrollView>
    );
  }
}

export default TodoList;
