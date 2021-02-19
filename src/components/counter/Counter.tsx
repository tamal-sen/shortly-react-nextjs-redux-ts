import { Grid, makeStyles } from '@material-ui/core'

interface CounterProps {
  count: number
  add: () => void
  remove: () => void
}

const useStyles = makeStyles((theme) => ({
  counter: {
    color: theme.palette.primary.main,
  },
  container: {
    padding: '4rem',
  },
}))

export const Counter: React.FC<CounterProps> = ({ count, add, remove }) => {
  const styles = useStyles()
  const onAdd = () => add()
  const onRemove = () => remove()
  return (
    <Grid container spacing={1} className={styles.container}>
      <Grid item lg={3} md={3}>
        <div className={styles.counter}>
          <h2 data-testid="counter-output">Count: {count}</h2>
          <button onClick={onAdd}>Add</button>
          <button onClick={onRemove}>Remove</button>
        </div>
      </Grid>
    </Grid>
  )
}
