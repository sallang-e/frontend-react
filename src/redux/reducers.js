// const token = localStorage.getItem('token');
const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5IiwiZXhwIjoxNjk5MTM1ODIyfQ.iGLiV3LmUU1_r_7ZBPjj47VMfZcWht2nX7xrAO6KTjLHg-DxbE2ciFkJQPLmBXr6i58t2NhP6wux4kTd8L_TIA";

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