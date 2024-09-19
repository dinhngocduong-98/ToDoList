<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>{{index}}</span>
    <span>{{task.taskName}}</span>
    <span>{{getLevelTask}}</span>
    <span>    </span>
    <i
      v-on:click = "handleDelete"
      class="far fa-trash-alt delete"></i>
    <button
      v-on:click = "handleEdit"
    >edit</button>
  </li>
</template>

<script>
import mapLevel from '../mocks/level'
import { mapState, mapActions } from 'vuex'
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
  },
  methods: {
    ...mapActions(
      {
        'actionHandleDelete': 'handleDelete',
        'actionHandleEdit': 'handleEdit'
      }
    ),
    handleDelete() {
      if(confirm('ban muon xoa')) {       
        this.actionHandleDelete(this.task);
      }
    },
    handleEdit() {
      this.actionHandleEdit(this.task);
    }
  }
};
</script>

<style>
</style>