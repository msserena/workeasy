<template>
  <div class="container-fluid">
    <b-container fluid>
      <br>
      <label> Offer name </label>
      <br>
      <b-form-input v-model="offer.name" type="text" placeholder="Enter name"></b-form-input>
      <br>
      <label> Start Date </label>
      <br>
      <v-calendar></v-calendar>

      <v-date-picker

              color="blue"
              v-model="offer.start_date"
              :input-props='{
                     placeholder: "Select Date",
                     readonly: true,
                    }'
      >
      </v-date-picker>
      <label> End Date </label>
      <br>
      <v-calendar></v-calendar>
      <v-date-picker
              v-model="offer.end_date"
              color="blue"
              :input-props='{
                     placeholder: "Select Date",
                     readonly: true}'>
      </v-date-picker>
      <label> Contract Type </label>
      <br>
      <b-form-select v-model="offer.selectedContract">
        <option selected disabled value="">Please Select one </option>

        <option v-for="item in offer.contract_id.data"
                :key="item.id"
                :value="item.id"
        > {{ item.name }}
        </option>
      </b-form-select>
      <label> Role </label>
      <br>
      <b-form-select v-model="offer.selectedJob">
        <option selected disabled value="">Please Select one </option>
        <option v-for="role in offer.job_id.data"
                :key="role.id"
                :value="role.id"> {{ role.position }}
        </option>
      </b-form-select>
      <label> Job description </label>
      <br>
      <b-form-textarea
              v-model="offer.description"
              placeholder="Enter job description"
              rows="3"
              max-rows="6"
      ></b-form-textarea>
      <br>
      <div class="row justify-content-center">
        <b-button squared variant="primary"
                  class="btn btn-primary btn-square btn-sm"
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
  import VCalendar from 'v-calendar';

  export default {
    components: {
      VCalendar
    },
    data() {
      return {}
    },

    props: {
      titleText: {
        type: String,
        default: 'ADD OFFER'
      },

      buttonText: {
        type: String,
        default: 'SAVE'
      },
      offer: {
        type: Object,
        default: () => ({}),
      }
    },
    computed: {
      isComplete() {
        return this.offer.name && this.offer.start_date && this.offer.end_date
          && this.offer.selectedContract && this.offer.selectedJob
          && this.offer.description;
      }
    },

    methods: {
      clickedButton() {
        this.$emit('clicked', this.offer);
      }
    },
    created() {
      let vm = this;
      axios.get('/api/v1/offers/actions/getContractTypes')
        .then(function (response) {
          vm.offer.contract_id = response.data;
        })
        .catch(function (error) {
        });

      axios.get('/api/v1/offers/actions/getJobPositions')
        .then(function (res) {
          vm.offer.job_id = res.data;
          console.log(vm.offer.job_id)
        })
        .catch(function (error) {
        });

    },
  }
</script>

<style>

</style>