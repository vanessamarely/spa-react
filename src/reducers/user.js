const initialState = {
    user: {
      isFetching: false,
      error: false,
      data: 'vanessa',
      result: null,
      currentCellIndex: null
    }
}

const user = (state = initialState.user, action) => {
  let user;
  switch (action.type) {
      case 'SHOW_USER':
          return Object.assign({}, state, {isFetching: true});
      default:
          return state;
  }
}

export default user;