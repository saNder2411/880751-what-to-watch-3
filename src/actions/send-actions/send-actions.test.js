import createAPI from '../../api.js';
import SendActions from './send-actions.js';
import CardsService from '../../services/cards-service.js';

import ActionTypes from '../../action-types/action-types.js';
import {DataTypes} from '../../const.js';

const API = createAPI(() => {});
const cardsService = new CardsService(API);

describe(`FetchActions work correctly`, () => {

  it(`Should make a correct sendData call to dispatch with arguments DataTypes.SEND_USER_AUTH_DATA`, () => {
    const sendActionCreator = SendActions.sendData(cardsService)(DataTypes.SEND_USER_AUTH_DATA);
    const dispatch = jest.fn();

    sendActionCreator(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionTypes.FETCH_AUTH_REQUEST,
    });
  });

  it(`Should make a correct sendData call to dispatch with arguments DataTypes.SEND_REVIEW_DATA`, () => {
    const sendActionCreator = SendActions.sendData(cardsService)(DataTypes.SEND_REVIEW_DATA);
    const dispatch = jest.fn();

    sendActionCreator(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionTypes.FETCH_REVIEWS_REQUEST,
    });
  });
});