import 'react-native';
import React from 'react';
import Search from '../src/screens/Search';
import {create} from 'react-test-renderer';
jest.useFakeTimers();
jest.mock('react-native-gesture-handler', () => {});
jest.mock('@react-navigation/native');

const tree = create(<Search />);

test('takes snapshot of search screen', () => {
  expect(tree).toMatchSnapshot();
});
