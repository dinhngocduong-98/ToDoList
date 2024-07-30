<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>{{index}}</span>
    <span>{{task.taskName}}</span>
    <span>{{getLevelTask}}</span>
    <span>    </span>
    <i class="far fa-trash-alt delete"></i>
    <button>edit</button>
  </li>
</template>

<script>
import mapLevel from '../mocks/level'
export default {
  name: "todo-list-item",
  data() {
    return {
        mapLevel: mapLevel
    };
  },
  props: {
    task: {
        type: Object,
        default: {}
    },
    index: {
        type: Number,
        default: 0
    }
  },
  computed: {
    getLevelTask(){
        return this.mapLevel[this.task.level].name;
    }
  }
};
</script>

<style>
</style>