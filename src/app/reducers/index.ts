import {
  ActionReducer,
  ActionReducerMap, MetaReducer
} from '@ngrx/store';

import {countReducer, CountState} from './count/count.reducer';

export interface State {
  count: CountState;
}

export const reducers: ActionReducerMap<State> = {
  count: countReducer
};

// middleware in Redux == pipe

// export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
//   return (state, action) =>{
//     console.log('state', state);
//     console.log('action', action);
//
//     return reducer(state, action);
//   };
// }

export const metaReducers: MetaReducer<State>[] = [];
