import React from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button } from './common';
import DeleteButton from './DeleteButton';

const ListItem = ({ task }) => {

  const { title } = task;
  return (
    <Card>
      <CardSection>
        <Text>{title}</Text>
      </CardSection>
    </Card>
  );
}

export default ListItem;
