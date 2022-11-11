<template>
  <h3>Créer une tache</h3>
  <form v-on:submit.prevent="createTask">
    <input type="text" placeholder="Nom de la tache" v-model="name" />
    <br>
    <textarea placeholder="Description de la tache" cols="30" rows="10" v-model="description"></textarea>
    <br>
    <select v-model="temporalityChoice">
      <option v-for="tempo in temporalityTypes" :value="tempo.value" v-bind:key="tempo.id">{{ tempo.name }} </option>
    </select>
    <br>
    <button>Créer</button>

  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "Form",
  emits: ["createtask"],
  setup(props, context){
    const name = ref("");
    const description = ref("");
    const temporalityTypes = ref([
      {
      id : 1,
      name : "court terme",
      value : "short-term"
    },
    {
      id : 2,
      name : "moyen terme",
      value : "medium-term"
    },
    {
      id : 3,
      name : "long terme",
      value : "long-term"
    },
    ]);
    const temporalityChoice = ref("");

    function createTask(){
      const task = {
        id: Date.now(),
        name: name.value,
        description: description.value,
        temporalityChoice: temporalityChoice.value,
      }
      console.log("Task => ", task)
      context.emit('createtask', task)
      resetForm();
    }

    function resetForm(){
      name.value = "",
      description.value = "",
      temporalityChoice.value = ""
    }

    return {name : name, description : description, temporalityTypes : temporalityTypes, temporalityChoice : temporalityChoice, createTask}
  }

}
</script>

<style scoped>
  input, textarea, select, button {
    width: 90%;
    margin: 5px 10px;
  }

</style>