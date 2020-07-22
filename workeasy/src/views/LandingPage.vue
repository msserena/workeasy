<template>
  <div class="container-fluid">
    <div class="header">
      <h3 class="text-center">
        <font-awesome-icon icon="flag" size="1x"></font-awesome-icon>
        WORKEASY
      </h3>
    </div>
    <router-link to='/login'>
      <b-button-group vertical size="lg" class="d-flex justify-content-center" text-variant="white">
        <b-button squared variant="outline-secondary" class="btn btn-md">LOGIN
        </b-button>
      </b-button-group>
    </router-link>

    <b-link to="/register">
      <b-button-group vertical size="lg" class="d-flex justify-content-center" text-variant="white">
        <b-button squared variant="outline-secondary" class="btn">REGISTER
        </b-button>
      </b-button-group>
    </b-link>

  </div>
</template>

<script>

</script>

<style scoped>

  .container-fluid {
    color: white;
    height: 100vh;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: /*linear-gradient(to right, #81ade2 0%,#d3e2ea 57%,#e0e8ec 66%,#e0e8ec 76%,#e0e8ec 76%,#bec7ec 100%,#bec7ec 100%);*/ linear-gradient(to right, #97bbe7 -1%, #97bbe7 0%, #97bbe7 2%, #97bbe7 2%, #97bbe7 31%, #97bbe7 49%, #c9d0ef 91%, #c9d0ef 91%);
  }

  .btn {
    border: white 2px solid;
    margin-top: 7px;
    color: white;
    font-size: 16px;
    letter-spacing: 2px;
  }

  h3 {
    letter-spacing: 3px;
    font-size: 30px;
  }


</style>