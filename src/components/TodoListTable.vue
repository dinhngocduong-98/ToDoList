<template>
  <ul class="list-group todos mx-auto text-light delete">
    <todo-list-item
        v-for="(task, index) in listTask"
        v-bind:key="task.id"
        v-bind:task="task"
        v-bind:index="index + 1"
    />
  </ul>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
export default {
  name: "todo-list-table",
  data() {
    return {};
  },
  components: {
    TodoListItem
  },
  props: {
    listTask: {
        type: Array,
        default: []
    }
  }
};
</script>

<style>
</style>