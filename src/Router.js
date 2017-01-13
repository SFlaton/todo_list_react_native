import React from 'React';
import {Scene, Router, Actions} from 'react-native-router-flux';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='root'>
        <Scene style={{ flex: 1 }}
          onRight={() => Actions.todoCreate()}
          rightTitle="Add"
          key="todoList"
          component={TodoList}
          title="Todo List"
          initial
        />
        <Scene key="todoCreate" component={TodoCreate} title="Create Task" />
      </Scene>
    </Router>
  )
};

export default RouterComponent;
