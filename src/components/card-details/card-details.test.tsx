import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CardDetails from './card-details';

const data = {
  director: `Steven Spielberg`,
  starring: [`Judi Dench`, `Robert De Niro`, `Leonardo DiCaprio`],
  runtime: 146,
  genre: `Drama`,
  released: 1978,
};

it(`Should CardDetails render correctly`, () => {
  const markup = renderer
    .create(<CardDetails {...data} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
