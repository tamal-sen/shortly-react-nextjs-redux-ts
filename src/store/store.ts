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

import { persistStore, persistReducer } from 'redux-persist'

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
export const initStore: MakeStore<AppState> = () => {
  const isClient = typeof window !== 'undefined'
  let store

  // We will persist store for client only
  if (isClient) {
    const storage = require('redux-persist/lib/storage').default
    const persistConfig = { key: 'root', storage }
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    store = createStore(persistedReducer, applyMiddleware(thunkMiddleware))

    // @ts-ignore
    store.__PERSISTOR = persistStore(store)
  } else {
    store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
  }
  return store
}

export const storeWrapper = createWrapper(initStore)
