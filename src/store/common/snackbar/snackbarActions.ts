import { SnackbarState } from './snackbarReducer'

export enum SnackbarActionTypes {
  HIDE_SNACKBAR_MESSAGE = 'HIDE_SNACKBAR_MESSAGE',
  SHOW_SNACKBAR_MESSAGE = 'SHOW_SNACKBAR_MESSAGE',
}

export type SnackbarAction = {
  type:
    | SnackbarActionTypes.SHOW_SNACKBAR_MESSAGE
    | SnackbarActionTypes.HIDE_SNACKBAR_MESSAGE
  payload: SnackbarState
}

// export const hide_snackbar: SnackbarAction = {
//   type: SnackbarActionTypes.HIDE_SNACKBAR_MESSAGE,
//   payload:
// }

// export const show_snackbar: SnackbarAction = Snac
