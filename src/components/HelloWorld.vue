<script>
export default {
  name : "HelloWorld",
  props : {
    msg : String
  }
};
</script>

<template>
  <div class="flex-col">
    <h1>{{ msg }}</h1>
    <p>App permettant de planifier les taches</p>
  </div>
</template>

<style scoped>
</style>
