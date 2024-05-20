import {combineReducers} from 'redux';

const init = {
  _theme: {},
};

export const _selected_theme = (state = init._theme, action) => {
  switch (action.type) {
    case 'set_theme':
      return action.payload;
    default:
      return state;
  }
};

let appReducer = combineReducers({
  _selected_theme,
});

export default appReducer;
