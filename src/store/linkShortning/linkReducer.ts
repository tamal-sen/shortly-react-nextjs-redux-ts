import { LinkAction, LinkActionTypes } from './linkActions'

export interface LinkState {
  original_link: string
  short_link: string
}

export interface LinkListState {
  list: LinkState[]
}

const initialLinkState: LinkListState = {
  list: [],
}

export const LinkReducer = (
  state: LinkListState = initialLinkState,
  action: LinkAction
): LinkListState => {
  switch (action.type) {
    // case LinkActionTypes.SET_SHORTENED_LINKS:
    //   return {
    //     ...state,
    //     list: action.payload
    //   }
    case LinkActionTypes.ADD_SHORTENED_LINK_TO_LIST:
      return {
        ...state,
        list: [action.payload, ...state.list],
      }

    default:
      return state
  }
}
