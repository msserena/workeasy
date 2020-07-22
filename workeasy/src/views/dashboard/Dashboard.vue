<template>
  <div class="container-fluid">
    <nav class="navbar navbar-brand mx-auto"> WORKEASY </nav>
    <div class="container">

      <div class="cards">

        <b-row>

          <router-link :to="{ name: 'profile' }">
            <b-card bg-variant="primary" class="btn btn-sq-lg btn-success">
              <font-awesome-icon icon="user-circle" size="4x"></font-awesome-icon>
              <br>
              <p>Profile</p>
            </b-card>
          </router-link>

          <router-link to="/addOffer">
            <b-card bg-variant="primary" class="btn btn-sq-lg btn-success">
              <font-awesome-icon icon="plus-circle" size="4x"></font-awesome-icon>
              <br>
              <p>Add Offer</p>
            </b-card>
          </router-link>

          <router-link to="/menageOffer">
            <b-card bg-variant="primary" class="btn btn-sq-lg btn-success">
              <font-awesome-icon icon="pen-square" size="4x"></font-awesome-icon>
              <br>
              <p>Manage Offer</p>
            </b-card>
          </router-link>

          <router-link to="/candidates">
            <b-card bg-variant="primary" class="btn btn-sq-lg btn-success">
              <font-awesome-icon icon="address-card" size="4x"></font-awesome-icon>
              <br>
              <p>Candidates</p>
            </b-card>
          </router-link>

        </b-row>
      </div>
    </div>
  </div>
</template>
<script>

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Heebo:800&display=swap');

  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-sq-lg {
    width: 150px !important;
    height: 150px !important;
  }

  .cards {
    margin: 20% 1%;

  }

  .btn {
    margin: 10px 5px 10px 5px;
  }

  p {
    font-size: 12px;
    text-align: center;
    padding: 5px;
    font-family: monospace;
  }

  .navbar {

    font-family: 'Heebo', sans-serif;
    font-size: 40px;
    letter-spacing: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }


</style>