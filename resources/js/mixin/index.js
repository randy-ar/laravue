import axios from 'axios';
import Swal from 'sweetalert2'
import router from '../routes/index.js';

var mixin = {
  data() {
    return {
      errors: {},
      session: '',
      message: '',
    }
  },
  created() {
    console.log("token; ", this.get_token);
    if (this.get_token != "") {
      window.axios.defaults.headers.common.Authorization = `Bearer ${this.get_token}`;
    } else {
      console.info({
        "token null": this.get_token
      });
    }
  },
  computed:{
    get_token(){
      return this.$store.getters.get_cookie("token");
    },
  },
  methods: {
    alert(message) {
      if(message != null && message != ''){
        if (String(message).includes("status code 401")){
          Swal.fire({
            icon: "error",
            title: "Error",
            text: message,
            showConfirmButton: true,
            showCloseButton: true,
          }).then(result =>{
            if(result.value){
              axios.post('/api/delete-cookie')
              .then(res => res.data)
              .then(res => {
                this.set_session(res);
                router.push({name: 'auth.login'});
              }).catch(err => this.alert(err));
            }
          });
        }
      }else{
        Swal.fire({
          icon: "error",
          title: "Error",
          text: message,
          showConfirmButton: true,
          showCloseButton: true,
        });
      }
    },
    set_session(response) {
      this.session = response.session;
      this.message = response.message;
      $("html, body").animate({
        scrollTop: 0
      }, "300");
    },
  }
}

export default mixin