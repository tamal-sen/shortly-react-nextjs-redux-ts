import { LinkState } from './linkReducer'

export enum LinkActionTypes {
  SET_SHORTENED_LINKS = 'SET_SHORTENED_LINKS',
  ADD_SHORTENED_LINK_TO_LIST = 'ADD_SHORTENED_LINK_TO_LIST',
}

export type LinkAction = {
  type:
    | LinkActionTypes.ADD_SHORTENED_LINK_TO_LIST
    | LinkActionTypes.SET_SHORTENED_LINKS
  payload: LinkState
}
