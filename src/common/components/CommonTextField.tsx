import React from 'react'
import TextField from '@material-ui/core/TextField'

export interface ICommonTextFieldProps {
  errorText?: string
  disableFullWidth?: boolean
  [propName: string]: any
}

export const CommonTextField: React.FC<ICommonTextFieldProps> = (props) => {
  const { errorText, disableFullWidth, ...restProps } = props

  return (
    <TextField
      variant="outlined"
      fullWidth={!disableFullWidth}
      error={Boolean(errorText)}
      helperText={errorText}
      {...restProps}
    />
  )
}
