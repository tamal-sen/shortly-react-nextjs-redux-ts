import { SnackbarActionTypes } from '@store/common/snackbar/snackbarActions'
import { Dispatch } from 'redux'

export const actionHideSnackbar = () => (dispatch: Dispatch): void => {
  dispatch({
    type: SnackbarActionTypes.HIDE_SNACKBAR_MESSAGE,
    payload: {
      message: '',
      type: 'null',
    },
  })
}
