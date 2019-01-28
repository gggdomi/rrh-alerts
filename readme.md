Plugin for [RRH](https://github.com/gggdomi/rrh) to display notifications when requests resolve.

## Installation

### Pre-requisites

- [RRH](https://github.com/gggdomi/rrh) need to be set up
- [react-toastify](https://github.com/fkhadra/react-toastify) is a peer dependency and `ToastContainer` component need to be added to your app (see https://github.com/fkhadra/react-toastify#one-component-to-rule-them-all)

`yarn add @gggdomi/rrh-alerts`

### Add rrh-alerts sagas to the app

```js
// index.js
import rrhAlertsSagas from '@gggdomi/rrh-alerts/src/sagas'

// configure saga middleware...

rrhAlertsSagas.map(sagaMiddleware.run)
```

## Usage

```js
import rrh from '@gggdomi/rrh'

export const addComment = rrh.new('ADD_COMMENT', '/comment/add/', {
  method: 'POST',
  // if not null, will display a success notification (default: null)
  successAlertText: "Comment added!",
  
  // if false won't display notification on errors (default: true)
  displayErrorAlert: false, 
  
  // if not null, will replace error message (default: null)
  failAlertText: "Could not add comment :-(", 
})
```

Then dispatch `addComment.Start()` 

## Configuration

### Global

```js
import rrhAlerts from '@gggdomi/rrh-alerts'

// set to true to automatically display a notification if a request fails (for all routes) (default: true)
rrhAlerts.displayErrorAlerts = false
```
