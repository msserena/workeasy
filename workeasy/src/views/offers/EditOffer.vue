<template>
  <div class="container-fluid">
    <header-comp></header-comp>
    <br>
    <h2 class="text-center"> {{ title }} </h2>
    <offer-form :buttonText="'Edit'"
                :offer="offer"
                @clicked="editOffer"
    ></offer-form>
  </div>

</template>

<script>

  import HeaderComp from '../../components/Header.vue'
  import OfferForm from '../../components/OfferForm.vue'
  import axios from 'axios';
  import toast from '../../assets/toast'

  export default {

    components: {
      HeaderComp,
      OfferForm
    },
    data() {
      return {

        title: 'EDIT OFFER',
        offer: {
          id: '',
          name: '',
          start_date: '',
          end_date: '',
          description: '',
          contract_id: [{}],
          job_id: [{}],
          selectedContract: '',
          selectedJob: '',
        }
      }
    },

    created() {
      let vm = this;
      axios.get('api/v1/companies/offers/' + this.$route.params.id + '?include=media')
        .then(function (response) {
          vm.offer = response.data;
          console.log(response);
          console.log(response.data);
        }).catch(function (error) {
      });

    },
    methods: {
      editOffer() {
        let vm = this;
        axios.put(`api/v1/companies/offers/${this.$route.params.id}`,
          {
            id: this.$route.params.id,
            name: this.offer.name,
            start_date: this.offer.start_date,
            end_date: this.offer.end_date,
            contract_id: this.offer.selectedContract,
            job_id: this.offer.selectedJob,
            description: this.offer.description
          })
          .then(function (response) {
            vm.offer = response;
            toast.success('Offer successfully updated!')
            vm.$router.push('/menageOffer');
          }).catch(function (error) {
          console.log(error);
        });
      },
    }
  }

</script>