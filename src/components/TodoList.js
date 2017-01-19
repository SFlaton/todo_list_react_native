import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Card, CardSection, Button } from './common';
import ListItem from './ListItem';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { list: [] };
  }

  componentWillMount() {
    axios.get('http://localhost:3000/tasks')
      .then(response => this.setState({ list: response.data.tasks }));
    console.log(this.props)
  }

  renderList() {
    return this.state.list.map(task =>
      <TouchableOpacity key={task.id} onPress={() => Actions.todoEdit({id: task.id, todo: task.title, completed: task.completed})}>
        <Card>
          <View style={styles.flexRow}>
            <CardSection style={[styles.flex3, task.completed ? styles.textStyleCompleted : styles.textStyleInProgress]}>
              <Text>
                {task.title}
              </Text>
            </CardSection>
            <CardSection style={[styles.flex1, task.completed ? styles.textStyleCompleted : styles.textStyleInProgress]}>
              <Text>
                {task.completed ? 'Completed!' : ''}
              </Text>
            </CardSection>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }


  render() {
    // console.log(this.state);

    return (
      <ScrollView>
        { this.renderList() }
      </ScrollView>
    );
  }
};

const styles = {
  textStyleCompleted: {
    backgroundColor: '#8bef86'
  },
  textStyleInProgress: {
    backgroundColor: '#fff'
  },
  flexRow: {
    flexDirection: 'row'
  },
  flex3: {
    flex: 3
  },
  flex1: {
    flex: 1
  }
};


export default TodoList;
