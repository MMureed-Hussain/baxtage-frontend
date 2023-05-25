import { all } from 'redux-saga/effects';
import { authSaga } from './auth/sagas';
import { userSaga } from './user/sagas';
import { subscriptionSaga } from './subscription/sagas';
import { transactionSaga } from './transaction/sagas';
import { packageSaga } from './package/sagas';
import { teamSaga } from './team/sagas';
import { ordersSaga } from './order/sagas';
import { contactsSaga } from './contacts/sagas';
import { propertiesSaga } from './properties/sagas';
import { utilsSaga } from './utils/sagas';
import { dealsSaga } from './deals/sagas';

export default function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    subscriptionSaga(),
    transactionSaga(),
    packageSaga(),
    teamSaga(),
    ordersSaga(),
    contactsSaga(),
    propertiesSaga(),
    dealsSaga(),
    utilsSaga(),
  ]);
}
