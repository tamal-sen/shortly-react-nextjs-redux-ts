import { Button, makeStyles, Theme } from '@material-ui/core'

export interface ICommonButtonProps {
  children: JSX.Element | string
  onClick: () => void
  color?: 'primary' | 'secondary' | 'default' | 'inherit'
  borderRadius?: 'none' | 'small' | 'medium'
  // variant?: 'contained' | 'outlined' | 'text';
  [propName: string]: any
}

const useStyles = makeStyles<Theme, ICommonButtonProps>((theme) => ({
  button: (props) => ({
    '&.MuiButton-root': {
      padding: '.625rem 2rem',
      textTransform: 'initial',
      letterSpacing: '0.02rem',
      fontWeight: 700,
      borderRadius: getBorderRadius(props.borderRadius),
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,

      '&:hover': {
        backgroundColor: '#9be3e2',
      },
    },
  }),
}))

const getBorderRadius = (borderRadius: string | undefined) => {
  switch (borderRadius) {
    case 'none':
      return 'initial'
    case 'small':
      return '0.425rem'
    case 'medium':
      return '0.625rem'
    default:
      return
  }
}

const CommonButton: React.FC<ICommonButtonProps> = (props) => {
  const classes = useStyles(props)
  const { color, children, borderRadius, onClick, ...restProps } = props
  return (
    <Button
      color={props.color ?? 'primary'}
      variant="contained"
      className={classes.button}
      disableElevation={true}
      disableFocusRipple={true}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </Button>
  )
}

export default CommonButton