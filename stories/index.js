import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoApp from '../Components/todo/todo';


storiesOf('Components', module)
  .add('TodoApp', () => (
    <TodoApp />
  )); 