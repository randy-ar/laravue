import vuex from 'vuex';

export default new vuex.Store({
  state: {
    token: '',
    user_id: '',
    is_login: false
  },
  mutations: {
    set_cookie(state, data){
      console.log(data);
      data.forEach(cookie => {
        console.log(cookie);
        if(cookie.value != '' && cookie.value != null && cookie.value != 'null'){
          if(cookie.key == 'token'){
            state.token = cookie.value;
            state.is_login = true;
          }
          if(cookie.key == 'user_id'){
            state.user_id = cookie.value;
            state.is_login = true;
          }
          document.cookie = `${cookie.key}=${cookie.value};path=/;`
        }
      });
    },
    clear_cookie(state){
      state.token = '';
      state.user_id = '';
      state.is_login = false;
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = '';
    }
  },
  getters: {
    get_cookie: state =>(key) => {
      const parts = document.cookie.split(`${key}=`);
      if (parts.length === 2){
        return parts.pop().split(';').shift();
      }
    },
    get_token: state => {
      return state.token;
    },
    get_user_id: state => {
      return state.user_id;
    },
    get_is_login: state => {
      return state.is_login;
    }
  },
})