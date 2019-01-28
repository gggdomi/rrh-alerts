import { takeEvery } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import rrh, { rrhActions, rrhSuccessRegex, rrhFailRegex } from '@gggdomi/rrh'
import rrhAlerts from './'

export function* onSuccess() {
  yield takeEvery(a => a.type.match(rrhSuccessRegex), function*(action) {
    const actions = rrhActions[action.groupName]
    if (actions.successAlertText) {
      toast.success(actions.successAlertText, { autoClose: 2000 })
    }
  })
}

export function* onFail() {
  yield takeEvery(a => a.type.match(rrhFailRegex), function*(action) {
    const actions = rrhActions[action.groupName]
    if (rrhAlerts.displayErrorAlerts || actions.displayErrorAlert)
      toast.error(actions.failAlertText || rrh.getErrorMessage(action.error))
  })
}

export default [onSuccess, onFail]
