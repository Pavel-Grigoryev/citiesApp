import { slice, asyncCitiesActions } from './cities-slice';
import { PlayPanel } from './PlayPanel/PlayPanel';
import * as citiesSelectors from './cities-selectors';

const citiesReducer = slice.reducer;
const { actions } = slice;
const citiesActions = {
  ...actions,
  ...asyncCitiesActions,
};

export { citiesReducer, PlayPanel, citiesSelectors, citiesActions };
