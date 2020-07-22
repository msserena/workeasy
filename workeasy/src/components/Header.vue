<template>
  <div>
    <div class="row">
      <nav class="navbar">
        <button class="btn btn-circle btn-circle-sm m-1" @click="$router.go(-1)">
          <font-awesome-icon icon="angle-left"></font-awesome-icon>
        </button>
        <span class="navbar-brand mx-auto">WORKEASY</span>
        <slot></slot>
      </nav>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  .navbar {
    width: 100%;
    height: auto;
    background-color: #9cc5e2;

  }

  .navbar-brand {
    align-items: center;
    color: white;
    font-size: 20px;
    letter-spacing: 7px;
    font-family: 'Roboto', sans-serif;
  }

  .btn-circle {
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    padding: 0;
    border-radius: 50%;
    background-color: white;
    color: #9cc5e2
  }

  .btn-circle img {
    position: relative;
    top: -1px;
  }

  .btn-circle-sm {
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 0.9rem;

  }
</style>