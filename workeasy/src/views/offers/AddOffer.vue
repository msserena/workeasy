<template>
  <div class="container-fluid">
    <header-comp></header-comp>
    <br>
    <h2 class="text-center"> {{ title }} </h2>

    <offer-form @clicked="save"
                :offer="addOffer"
    ></offer-form>
  </div>
</template>

<script>

  import HeaderComp from '../../components/Header.vue'
  import OfferForm from '../../components/OfferForm.vue'
  import axios from 'axios';
  import toast from '../../assets/toast'

  export default {
    data() {
      return {
        title: 'ADD OFFER',
        addOffer: {
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
    components: {
      HeaderComp,
      OfferForm
    },
    methods: {
      attachRandomCandidatesToThisOffer(offer) {
        axios.post(`api/v1/companies/offers/${offer}/attachCandidate`)
          .then(res => console.log(res))
          .catch(function (error) {

          })
      },
      save(formData) {
        let vm = this;
        axios.post('/api/v1/companies/offers', {
          name: formData.name,
          start_date: formData.start_date,
          end_date: formData.end_date,
          contract_id: formData.selectedContract,
          job_id: formData.selectedJob,
          description: formData.description,
          media: formData.media,
        })
          .then(function (response) {
            vm.attachRandomCandidatesToThisOffer(response.data.id);
            vm.$router.push('/dashboard');
            console.log(response.data);
          })
          .catch(function (error) {

          })
      },

    }
  }
</script>

<style>

</style>