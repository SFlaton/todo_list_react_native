import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Card, CardSection, Button } from './common';

const DeleteButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>delete</Text>
    </TouchableOpacity>
  )
}

export default DeleteButton;
