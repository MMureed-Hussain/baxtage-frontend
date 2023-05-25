import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer as authReducer } from '../models/auth/reducers';
import { reducer as userReducer } from '../models/user/reducers';
import { reducer as subscriptionReducer } from '../models/subscription/reducers';
import { reducer as transactionReducer } from '../models/transaction/reducers';
import { reducer as packageReducer } from '../models/package/reducers';
import { reducer as teamReducer } from '../models/team/reducers';
import { reducer as orderReducer } from '../models/order/reducers';
import { reducer as contactReducer } from '../models/contacts/reducers';
import { reducer as utilsReducer } from '../models/utils/reducers';
import { reducer as propertiesReducer } from '../models/properties/reducers';
import { reducer as dealsReducer } from '../models/deals/reducers';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const cityPersistConfig = {
  key: 'city',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  subscription: subscriptionReducer,
  transaction: transactionReducer,
  package: packageReducer,
  team: teamReducer,
  orders: orderReducer,
  contacts: contactReducer,
  utils: utilsReducer,
  properties: propertiesReducer,
  deals: dealsReducer,
  product: persistReducer(cityPersistConfig, authReducer),
});

export { rootReducer };
