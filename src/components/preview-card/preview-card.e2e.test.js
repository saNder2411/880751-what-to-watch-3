import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PreviewCard from './preview-card.jsx';

configure({
  adapter: new Adapter(),
});

const mock = {
  id: 1,
  title: `Bohemian Rhapsody`,
  poster: `img/bohemian-rhapsody.jpg`,
};

const mockEvt = {
  currentTarget: {
    id: mock.id,
  },
};

it(`When you hover over the card, the id of the card enters the handler`, () => {
  const {id} = mock;
  const onMouseOver = jest.fn();
  const onClick = jest.fn();
  const previewCard = shallow(
      <PreviewCard
        previewCardData={mock}
        previewCardHandlers={[onClick, onMouseOver]}
      />
  );

  previewCard.simulate(`mouseover`, mockEvt);

  expect(onMouseOver.mock.calls.length).toBe(1);
  expect(onMouseOver.mock.calls[0][0]).toHaveProperty(`currentTarget.id`, id);
});
