import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button } from './common';
import DeleteButton from './DeleteButton';
import TodoList from './TodoList';

// const ListItem = ({ task }) => {
//
//   const { title } = task;
//   return (
//     <Card>
//       <CardSection>
//         <Text>{title}</Text>
//       </CardSection>
//     </Card>
//   );
// }
//
// export default ListItem;

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log()
    return (
      <View>
        <Text>{task.title}</Text>
      </View>
    );
  }
}

export default ListItem;
