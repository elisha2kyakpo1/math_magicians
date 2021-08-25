import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

test('It should render the calculation result', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
