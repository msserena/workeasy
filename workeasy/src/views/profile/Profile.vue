<template>
  <div class="container-fluid">
    <header-comp>
      <button class="btn btn-circle btn-circle-sm m-1" @click="logout">
        <font-awesome-icon icon="power-off"></font-awesome-icon>
      </button>
    </header-comp>
    <company-profile :buttonText="'EDIT PROFILE'"
                     @clicked="editProfile"
                     :showInput=false
                     :profile="registerData">
    </company-profile>

    <b-container>
      <br>
      <label> Password </label>
      <br>
      <b-form-input v-model="new_password" type="password" placeholder="Enter your password"></b-form-input>
      <br>
      <label>Confirm Password </label>
      <br>
      <b-form-input v-model="confirmPassword" type="password" placeholder="Enter your password"></b-form-input>
      <br>
      <div class="row justify-content-center">
        <b-button squared variant="primary"
                  class="btn btn-primary btn-square btn-md"
                  @click="changePass"
                  :disabled='!isComplete'
        >CHANGE PASSWORD
        </b-button>

      </div>
    </b-container>

  </div>
</template>

<script>
  import HeaderComp from '../../components/Header.vue'
  import CompanyProfile from '../../components/CompanyProfile.vue'
  import axios from 'axios';
  import {routes} from '../../router'
  import toast from '../../assets/toast'

  export default {
    name: 'register',

    data() {
      return {

        new_password: '',
        confirmPassword: '',
        registerData: {
          id: '',
          email: '',
          company: {
            name: '',
            address: '',
            vat: '',
            industry: '',
            phone_number: '',
          },
          media: ''
        },
      }
    },

    components: {
      HeaderComp,
      CompanyProfile
    },
    computed: {
      isComplete() {
        return this.new_password && this.confirmPassword;
      }
    },
    created() {
      this.uploadData();
    },

    methods: {

      uploadData() {
        let vm = this;
        axios.get('/api/v1/me?include=company')
          .then(response => {
            vm.registerData = response.data;
            console.log(response.data)
          })
          .catch(err => console.log(err))
      },
      logout() {
        this.$bvModal.msgBoxConfirm('Are you sure to logout?')
          .then(value => {
            if (value === true) {
              let vm = this;
              axios.post('/api/v1/logout')
                .then(function (response) {
                  localStorage.clear();
                  vm.$router.push({name: 'login'});
                  console.log(response);
                }).catch(function (error) {
                console.log(error);
              })
            }
          }).catch(err => {
        })
      },

      editProfile() {
        let vm = this;
        axios.put('api/v1/users?include=company', {
          id: this.registerData.id,
          email: this.registerData.email,
          company: {
            id: this.registerData.company.id,
            name: this.registerData.company.name,
            industry: this.registerData.company.industry,
            vat: this.registerData.company.vat,
            address: this.registerData.company.address,
            phone_number: this.registerData.company.phone_number,
            media: this.registerData.company.media,

          }
        })
          .then(function (response) {
            toast.success('Profile Updated!');
            vm.registerData.data = response.data;
            console.log(response.data);
          }).catch(function (error) {
          toast.error('Could not update data!');
        });
      },
      changePass() {
        let vm = this;
        if (this.new_password === this.confirmPassword) {
          axios.post('/api/v1/users/actions/changePassword', {
            new_password: this.new_password,
            confirm_new_password: this.confirmPassword
          })
            .then(function (response) {
              toast.success('Password successfully changed!');
              vm.$router.push({name: 'dashboard'})
            }).catch(function (error) {
          });
        } else {
          toast.error('Passwords should be the same!');
        }

      },

    }

  }
</script>

<style>

  .btn-md {
    font-size: 12px;
    width: 80%;
    letter-spacing: 1px;
  }

</style>