const token = localStorage.getItem('token');

const loginReducer = (state = token, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      localStorage.setItem('token', action.payload);
      return action.payload;
    case 'REMOVE_TOKEN':
      localStorage.removeItem('token');
      return null;
    default:
      return state;
  }
};

const page = 1;

const pageReducer = (state = page, action) => {
  switch (action.type) {
    case 'GO_MYPAGE':
      return 2;
    case 'BACK_TO_MAIN':
      return 1;
    default:
      return state;
  }
};


export { loginReducer, pageReducer };