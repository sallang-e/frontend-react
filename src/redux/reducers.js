// const token = localStorage.getItem('token');
const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMCIsImV4cCI6MTY5OTEzNjYxMn0.ysxizQT4XZcVJB51vb3Ufe9EjBGAZqCMzei49rvN71pbEkgK763Bhwug_BI4218BmtC9cK-oFWdtowEsoBZyZQ";

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