import 'react-native';
import React from 'react';
import Home from '../src/screens/Home';
import {create} from 'react-test-renderer';
jest.useFakeTimers();
jest.mock('react-native-gesture-handler', () => {});

const tree = create(<Home />);

test('takes snapshot of home screen', () => {
  expect(tree).toMatchSnapshot();
});
