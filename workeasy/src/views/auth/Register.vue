<template>
  <div class="container-fluid">

    <header-comp></header-comp>

    <br>
    <company-profile :buttonText="'REGISTER'"
                     :profile="profile"
                     @clicked="register"
                     :showInput=true>
    </company-profile>
  </div>
</template>

<script>
  import HeaderComp from '../../components/Header.vue'
  import CompanyProfile from '../../components/CompanyProfile.vue'
  import axios from 'axios';

  export default {

    name: 'register',
    components: {
      HeaderComp,
      CompanyProfile
    },
    data() {
      return {
        msg: '',
        profile: {
          id: '',
          email: '',
          password: '',
          confirmPassword: '',
          company: {
            name: '',
            address: '',
            vat: '',
            industry: '',
            phone_number: '',
          },
//          media: ''
        }
      }
    },
    methods: {
      register() {
        let vm = this;
        axios.post('/api/v1/users',
          {
            email: this.profile.email,
            password: this.profile.password,
            password_confirmation: this.profile.confirmPassword,
            company: {
              name: this.profile.company.name,
              industry: this.profile.company.industry,
              vat: this.profile.company.vat,
              address: this.profile.company.address,
              phone_number: this.profile.company.phone_number
//            media: ""
            }
          })
          .then(function (response) {
            vm.$router.push({name: 'login'});
            console.log(response.data);
          })
          .catch(function (error) {
            if (error.response) {
              if (data.password !== data.password_confirmation) {
                vm.msg = 'Please password and confirm password should be the same'
              }
              console.log(error.response.data.error.message.password);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
      }
    }
  }
</script>

<style>

</style>