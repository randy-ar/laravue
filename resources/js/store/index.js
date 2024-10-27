import vuex from 'vuex';

export default new vuex.Store({
  state: {
    token: '',
    user_id: '',
  },
  mutations: {
    set_cookie(state, data){
      console.log(data);
      data.forEach(cookie => {
        console.log(cookie);
        if(cookie.value != '' && cookie.value != null && cookie.value != 'null'){
          document.cookie = `${cookie.key}=${cookie.value};path=/;`
        }
      });
    },
  },
  getters: {
    get_cookie: state =>(key) => {
      const parts = document.cookie.split(`${key}=`);
      if (parts.length === 2){
        return parts.pop().split(';').shift();
      }
    },
  },
})