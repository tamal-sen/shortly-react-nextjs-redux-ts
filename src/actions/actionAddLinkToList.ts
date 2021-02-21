import { LinkActionTypes } from '@store/linkShortning/linkActions'
import { LinkState } from '@store/linkShortning/linkReducer'
import { Dispatch } from 'redux'

export const actionAddLinkToList = (link: LinkState) => (
  dispatch: Dispatch
): void => {
  dispatch({
    type: LinkActionTypes.ADD_SHORTENED_LINK_TO_LIST,
    payload: link,
  })

  console.log('dispatched')
}
