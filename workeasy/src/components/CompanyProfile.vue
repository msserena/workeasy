<template>
  <div class="container-fluid">
    <b-container fluid>
      <br>
      <h2 class="text-center">COMPANY PROFILE</h2>
      <!--<input type="file" @change="onFileChanged">-->
      <br>
      <label> Name </label>
      <br>
      <b-form-input v-model="profile.company.name" type="text" placeholder="Enter your name"></b-form-input>
      <br>
      <label> Address </label>
      <br>
      <b-form-input v-model="profile.company.address" type="text" placeholder="Enter your address"></b-form-input>
      <br>
      <label> VAT </label>
      <br>
      <b-form-input v-model="profile.company.vat" placeholder="Enter VAT"></b-form-input>
      <br>
      <label> Industry </label>
      <br>
      <b-form-input v-model="profile.company.industry" placeholder="Enter industry"></b-form-input>
      <br>
      <label> Email </label>
      <br>
      <b-form-input v-model="profile.email" type="email" placeholder="Enter email"></b-form-input>
      <br>
      <label> Phone Number </label>
      <br>
      <b-form-input v-model="profile.company.phone_number" placeholder="Enter phone number"></b-form-input>
      <br>
      <div v-if="showInput">
        <label> Password </label>
        <br>
        <b-form-input v-model="profile.password" type="password" placeholder="Enter your password"></b-form-input>
        <br>
        <label>Confirm Password </label>
        <br>
        <b-form-input v-model="profile.confirmPassword" type="password"
                      placeholder="Enter your password"></b-form-input>
        <br>
      </div>

      <div class="row justify-content-center">
        <b-button squared variant="primary"
                  class="btn btn-primary btn-square btn-md"
                  @click="clickedButton"
                  :disabled="!isComplete"
        >{{ buttonText }}

        </b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'companyProfile',
    data() {
      return {
        selectedFile: null
      }
    },
    computed: {
      isComplete() {
        return this.profile.email && this.profile.company.name
          && this.profile.company.address && this.profile.company.vat
          && this.profile.company.industry && this.profile.company.phone_number
      }
    },
    props: {
      buttonText: {
        type: String,
        default: ''
      },
      showInput: {
        type: Boolean,
        default: true,
      },

      profile: {
        type: Object,
        default: () => ({}),
      },

    },
    methods: {
      clickedButton() {
        this.$emit('clicked', this.profile);
      },

    },

  }
</script>

<style scoped>

  .btn-md {
    font-size: 12px;
    width: 80%;
    letter-spacing: 1px;
    margin: 8px;
    padding: 1em 3em;
  }

  h2.text-center {
    font-size: 25px;
    letter-spacing: 2px;
  }
</style>