import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '../pages/Nav';

test('It should render correctly', () => {
  const tree = renderer.create(<BrowserRouter><Nav /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
