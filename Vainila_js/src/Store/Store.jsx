import {legacy_creatStore} from 'redux';

import {CounterReducer} from '../Reducer/Reducer';

export const myStore =legacy_creatStore(CounterReducer);