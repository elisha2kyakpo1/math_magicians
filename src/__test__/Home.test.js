import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/Home';

test('Should render correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
