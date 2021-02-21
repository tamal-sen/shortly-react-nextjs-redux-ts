import {
  createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
  Reducer,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { createWrapper, MakeStore, HYDRATE } from 'next-redux-wrapper'

import { counterReducer, CounterState } from './counter/counterReducer'
import { LinkReducer, LinkListState } from './linkShortning/linkReducer'
import {
  snackbarReducer,
  SnackbarState,
} from './common/snackbar/snackbarReducer'

export interface AppState {
  counter: CounterState
  snackbar: SnackbarState
  links: LinkListState
}

const appReducer = combineReducers({
  counter: counterReducer,
  snackbar: snackbarReducer,
  links: LinkReducer,
})

const rootReducer: Reducer<AppState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    /* client state will be overwritten
     * by server or static state hydation.
     * Implement state preservation as needed.
     * see: https://github.com/kirill-konshin/next-redux-wrapper#server-and-client-state-separation
     */
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  }
  return appReducer(state, action)
}

/**
 * initStore
 * Initialise and export redux store
 */
const initStore: MakeStore<AppState> = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const storeWrapper = createWrapper(initStore)
