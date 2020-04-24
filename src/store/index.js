import { createStore } from 'redux';
import reducers from '../reducers/index';

export default createStore(
  reducers,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
