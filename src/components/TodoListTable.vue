<template>
  <ul
     v-if = "listTask.length !== 0"
    class="list-group todos mx-auto text-light delete">
    <todo-list-item
        v-for="(task, index) in listTask"
        v-bind:key="task.id"
        v-bind:task="task"
        v-bind:index="index + 1"
    />
  </ul>
  <ul v-else
    class="list-group todos mx-auto text-light delete">
    <tr>
        <td> <h4>List Empty</h4></td>
    </tr>
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