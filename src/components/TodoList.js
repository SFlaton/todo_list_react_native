import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ListItem from './ListItem';

class TodoList extends Component {
  state = { list: [] };

  componentWillMount() {
    axios.get('http://localhost:3000/tasks')
      .then(response => this.setState({ list: response.data.tasks }));
  }

  renderList() {
    return this.state.list.map(task =>
      <ListItem key={task.title} task={task}  />
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
