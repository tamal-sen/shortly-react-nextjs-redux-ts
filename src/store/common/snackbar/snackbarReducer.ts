import { SnackbarAction, SnackbarActionTypes } from './snackbarActions'

export interface SnackbarState {
  message: string
  type: 'SUCESS' | 'FAILURE' | null
}

const initialSnackbarState = {
  message: '',
  type: null,
}

export const snackbarReducer = (
  state: SnackbarState = initialSnackbarState,
  action: SnackbarAction
): SnackbarState => {
  const { payload } = action
  switch (action.type) {
    case SnackbarActionTypes.SHOW_SNACKBAR_MESSAGE:
      console.log('should update state')
      return {
        ...state,
        message: payload.message,
        type: payload.type,
      }
    case SnackbarActionTypes.HIDE_SNACKBAR_MESSAGE:
      return {
        ...state,
        message: '',
        type: null,
      }

    default:
      return state
  }
}
