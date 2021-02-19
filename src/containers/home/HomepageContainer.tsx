import React from 'react'
import * as actions from 'src/actions'
// import * as appActions from "actions";
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import HomepageComponent, {
  HomepageProps,
} from '@components/home/HomepageComponent'
import { AppState } from '@store/store'

const HomepageContainer = (props: HomepageProps) => (
  <HomepageComponent {...props} />
)

const mapStateToProps = (state: AppState) => ({ ...state })

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomepageContainer)
