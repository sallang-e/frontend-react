// const token = localStorage.getItem('token');
const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiZXhwIjoxNjk5MTM1MTM5fQ.El-GjRkTOZe72OcbIPWYaMHQBaMp7lGzh_4q0D3hqNipuNAhx755-0mhVTTIRdjZO9O1P5XP4JrHdKf6z4v-Ag";

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