import { Button } from '@material-ui/core'
import { SnackbarState } from '@store/common/snackbar/snackbarReducer'

export interface HomepageProps {
  actionShowSnackbar: (state: SnackbarState) => void
}

const HomepageComponent: React.FC<HomepageProps> = (props) => {
  const popup = () =>
    props.actionShowSnackbar({
      message: 'hello from the other side',
      type: 'SUCESS',
    })
  return (
    <div>
      <h1>Hello, World!</h1>
      <Button color="primary" onClick={() => popup()}>
        Dispatch a snackbar
      </Button>
    </div>
  )
}

export default HomepageComponent
