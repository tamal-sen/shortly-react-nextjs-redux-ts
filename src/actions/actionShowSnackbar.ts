import { SnackbarActionTypes } from '@store/common/snackbar/snackbarActions'
import { SnackbarState } from '@store/common/snackbar/snackbarReducer'
import { Dispatch } from 'redux'

export const actionShowSnackbar = (snackbar: SnackbarState) => (
  dispatch: Dispatch
): void => {
  dispatch({
    type: SnackbarActionTypes.SHOW_SNACKBAR_MESSAGE,
    payload: snackbar,
  })

  console.log('dispatched')
}
