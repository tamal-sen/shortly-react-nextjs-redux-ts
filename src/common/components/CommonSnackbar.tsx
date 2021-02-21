import React, { FC } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { SnackbarState } from '@store/common/snackbar/snackbarReducer'
import { isEmpty } from 'src/helper/isEmpty'

export interface SnackbarProps {
  snackbar: SnackbarState
  actionHideSnackbar: () => void
}

export const CommonSnackbar: FC<SnackbarProps> = (props) => {
  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    props.actionHideSnackbar()
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={!isEmpty(props.snackbar.message)}
      autoHideDuration={3000}
      onClose={handleClose}
      message={props.snackbar.message}
    />
  )
}
