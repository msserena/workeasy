<template>
  <div class="container-fluid">
    <header-comp></header-comp>
    <br>
    <h2 class="text-center"> YOUR OFFERS </h2>

    <router-link to="/addOffer">
      <button class="btn btn-primary btn-square btn-lg">
        <h4>ADD</h4>
        <font-awesome-icon icon="plus-circle" size="2x"></font-awesome-icon>
        <br>
      </button>
    </router-link>
    <br> <br>
    <div class="cards" v-for="item in yourOffers.data"
         :key="item.id">

      <div class="card" style="width: 18rem;">
        <img class="card-img-top">
      </div>

      <p> {{ item.name }}
        <br>
        {{ item.description }}
      </p>

      <div class="btn2">
        <router-link :to="{ name: 'editOffer',  params :{ id : item.id }}">
          <button class="btn btn-primary btn-square">
            <font-awesome-icon icon="pen"></font-awesome-icon>
            Edit
          </button>
        </router-link>
        <button class="btn btn-primary btn-square" @click="deleteOffer(item.id)">
          <font-awesome-icon icon="trash-alt"></font-awesome-icon>
          Delete
        </button>
      </div>

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
        yourOffers: [],
      }
    },
    components: {
      HeaderComp,
    },
    methods: {
      getAllOfferList() {
        axios.get(`api/v1/companies/offers?include=company,media`)
          .then(response => {
            this.yourOffers = response.data;
            console.log(response.data);
          })
          .catch(error => console.log(error))
      },

      deleteOffer(id) {
        this.$bvModal.msgBoxConfirm('Are you sure to delete this offer?')
          .then(value => {
            if (value === true) {
              axios.delete(`/api/v1/companies/offers/${id}`)
                .then(response => {
                  this.getAllOfferList();
                  console.log(response);
                })
                .catch(function (error) {
                })
            }
          }).catch(err => {
        })
      },

    },
    created() {
      this.getAllOfferList();
    },
  }
</script>

<style scoped>

  .cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .btn-lg {
    padding: 5px;
    width: 100%;
  }

  .btn-square {
    border-radius: 0;
  }

  .btn2 {
    display: flex;
    justify-content: space-between;
    width: 200px;
    margin-top: auto;
    margin-left: auto;
  }

  .card {
    width: 80px !important;
    height: 80px !important;
  }

  p {
    margin-left: 20px;
  }


</style>