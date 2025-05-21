import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from './store';

type State = ReturnType<typeof store.getState>;

export type StateField<K extends keyof State> = State[K];

type AppDispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
