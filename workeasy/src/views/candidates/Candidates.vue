<template>
  <div class="container-fluid">
    <header-comp></header-comp>
    <br>
    <h2 class="text-center"> {{ title }} </h2>
    <br>
    <div class="cards" v-for="candidate in allCandidates.data"
         :key="candidate.id">

      <div class="card" style="width: 18rem;">
        <img class="card-img-top">
      </div>

      <p> {{ candidate.name }}
        <br>
        {{ candidate.description }}
      </p>
      <p class="btn btn-primary"> {{ candidate.candidates_count }} </p>
      <p>
        <router-link :to="{ name: 'candidatesList',  params :{ id : candidate.id, name: candidate.name }}">
          <button class="btn btn-secondary btn-square">SEE CANDIDATES</button>
        </router-link>

      </p>
      <hr style="width: 100%; color: gray; height: 1px; background-color:gray;"/>
    </div>
  </div>

</template>

<script>

  import HeaderComp from '../../components/Header.vue'
  import axios from 'axios';

  export default {
    data() {
      return {
        title: 'CANDIDATES',
        allCandidates: []
      }
    },
    components: {
      HeaderComp,
    },
    created() {
      axios.get('api/v1/companies/offers?include=company,media')
        .then(response => {
          this.allCandidates = response.data;
          console.log(response.data);
        })
        .catch(err => console.log(err))
    },

  }

</script>

<style scoped>

  .cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
  }

  .btn-square {
    border-radius: 0;
    margin-left: 60px;
  }

  .card {
    width: 80px !important;
    height: 80px !important;
  }

  .btn-primary {
    border-radius: 25px;
  }

  h2.text-center {
    font-size: 30px;
    letter-spacing: 4px;
    color: grey;
  }
</style>