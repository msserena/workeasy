<template>
  <div class="container-fluid">
    <header-comp></header-comp>
    <br>
    <h2 class="text-center"> {{ title }} </h2>
    <br>
    <div class="cards" v-for="item in candidatesList.data"
         :key="item.id">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top">
      </div>

      <p> {{ item.name }}  </p>

      <button class="btn btn-primary btn-xs" @click="deleteCandidate(item.id)">
        <font-awesome-icon icon="times-circle" class="icon"></font-awesome-icon>
      </button>
      <button class="btn btn-primary btn-xs" @click="acceptCandidate(item.id)">
        <font-awesome-icon icon="check-circle" class="icon"></font-awesome-icon>
      </button>

      <button class="btn btn-primary btn-xs btn-group-toggle" @click="toggleExperience(item.id)">
        <font-awesome-icon icon="arrow-circle-down" class="icon"></font-awesome-icon>
      </button>
      <hr style="width: 100%; color: gray; height: 1px; background-color:gray;"/>
      <p v-for="(itm,index) in item.experiences"
         :key="index"
         v-if="seen"> {{ itm }}</p>
    </div>


  </div>
</template>

<script>

  import HeaderComp from '../../components/Header.vue'
  import axios from 'axios';
  import FontAwesomeIcon from "@fortawesome/vue-fontawesome/src/components/FontAwesomeIcon";

  export default {
    data() {
      return {
        title: 'CANDIDATES',
        candidatesList: [],
        seen: false,

      }
    },
    components: {
      FontAwesomeIcon,
      HeaderComp,
    },

    created() {
      this.allCandidatesList();
    },
    methods: {
      allCandidatesList() {
        axios.get(`/api/v1/companies/offers/${this.$route.params.id}/candidates?include=experiences`)
          .then(response => {
            this.candidatesList = response.data;

            console.log(this.candidatesList);
          })
          .catch(err => console.log(err))
      },

      deleteCandidate(theId) {
        this.$bvModal.msgBoxConfirm('Do you want to reject this candidate?')
          .then(value => {
            if (value === true) {
              axios.post(`/api/v1/companies/offers/${this.$route.params.id}/candidates/${theId}/interviews/actions/reject`)
                .then(res => {
                  this.allCandidatesList();
                }).catch(error => console.log(error))
            }
          })
          .catch(err => {
          })

      },
      acceptCandidate(theID) {
        axios.post(`api/v1/companies/offers/${this.$route.params.id}/candidates/${theID}/interviews/actions/accept`)
          .then(res => {
            this.allCandidatesList();
            console.log(res);
          })
          .catch(error => console.log(error))
      },
      toggleExperience(theID) {
        this.seen = !this.seen;
      }
    }
  }
</script>

<style scoped>
  .cards {

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

  }

  .card {
    width: 80px !important;
    height: 80px !important;
  }

  p {
    margin-left: 20px;
  }

  .btn {
    margin-top: 25px;
  }

  .btn-xs {
    width: 25px;
    height: 25px
  }

  .btn-group-toggle {
    margin-top: 80px;
    border-radius: 25px;
  }

  .icon {

    width: 20px;
    height: 20px;
    margin-left: -10px;
    padding-bottom: 3px;
  }
</style>