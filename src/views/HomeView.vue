<script>
import HelloWorld from '../components/HelloWorld.vue';
import Form from '../components/Form.vue';
import taskcrud from '../services/taskcrud.js'

export default {
  name: "Home",
  components: {
    HelloWorld,
    Form,
  },
  setup(){
    function addTask(payload){
      console.log("function addTask() HomeView", payload);
      taskcrud.create(payload);
    }
    return {ajoutTache : addTask}
  }
}

</script>

<template>
  <main>
    <HelloWorld msg="To Do App VueJs" />
    <Form v-on:createtask="ajoutTache" />
  </main>
</template>
