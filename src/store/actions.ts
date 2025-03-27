import { createAction } from '@reduxjs/toolkit';

export const Action = {
  INC_COUNT: 'INC_COUNT',
  DEC_COUNT: 'DEC_COUNT',
  RESTART: 'RESTART',
  ADD_SOME_VALUE: 'ADD_SOME_VALUE',
};


export const incCountAction = createAction(Action.INC_COUNT);
