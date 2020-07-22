<template>
  <div class="container-fluid">
    <header-comp></header-comp>
    <b-container>

      <b-row>
        <b-col cols="12">
          <br>
          <h2 class="text-center">LOGIN</h2>
          <br>
          <p>
            <font-awesome-icon icon="flag" size="6x" class="flagIcon"></font-awesome-icon>
          </p>
          <br><br>

          <b-form-input type="email" v-model="email" placeholder="Enter email"></b-form-input>
          <br>
          <b-form-input type="password" v-model="password" placeholder="Enter password"></b-form-input>
          <br>
          <p style="color: red"> {{ msg }}</p>
          <div class="row justify-content-center">
            <b-button squared variant="primary"
                      class="btn btn-primary btn-square btn-sm"
                      @click="login"
                      :disabled="!isComplete"
            >LOGIN

            </b-button>
          </div>

        </b-col>
      </b-row>

    </b-container>

  </div>
</template>

<script>
  import HeaderComp from '../../components/Header.vue'
  import axios from 'axios';
  import {routes} from '../../router'
  import FontAwesomeIcon from "@fortawesome/vue-fontawesome/src/components/FontAwesomeIcon";

  export default {
    name: 'login',
    components: {
      FontAwesomeIcon,
      HeaderComp
    },
    data() {
      return {

        email: '',
        password: '',
        msg: '',

      }
    },
    computed: {
      isComplete() {
        return this.email && this.password;
      }
    },
    methods: {
      login() {
        let vm = this;
        const loginCredentials = {
          email: this.email,
          password: this.password
        };
        axios.post('/api/v1/login', {
          email: loginCredentials.email,
          password: loginCredentials.password,
          returnSecureToken: true
        })
          .then(function (response) {
            localStorage.setItem('token', response.data.token);
            vm.$router.push({name: 'dashboard'});
            window.location.reload();
            console.log(response);
          }).catch(function (error) {
          if (error.response) {
            console.log(error.response.error.message);
            vm.msg = 'Please correct the credentials'
          }
        });
      }
    },

  }

</script>
<style>

  .btn-sm {
    margin: 15px;
    padding: 1em 3em;
    letter-spacing: 2px;
  }

  .flagIcon {
    color: grey;
    width: 200px !important;
    height: 200px !important;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2.text-center {
    font-size: 30px;
    letter-spacing: 4px;
    color: grey;
  }
</style>