<template>
  <ul
     v-if = "listTaskSearch.length !== 0"
    class="list-group todos mx-auto text-light delete">
    <todo-list-item
        v-for="(task, index) in listTaskSearch"
        v-bind:key="task.id"
        v-bind:task="task"
        v-bind:index="index + 1"
        v-on:handleDelete = "handleDelete"
        v-on:handleEdit = "handleEdit"
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
import { mapState, mapActions, mapGetters } from 'vuex'
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

  },
  computed : {
    ...mapGetters([
        'listTaskSearch'
    ])
  },
  created() {
    // let tasks = localStorage.getItem('task') || '[]';
    // console.log("created TodoListTable");
    // this.changeTasks(JSON.parse(tasks));
  },
  methods: {
    ...mapActions(
      [ 'changeTasks' ]
    ),
    handleDelete(task) {
      // console.log('listTable:',task);
      this.$emit('handleDelete', task);
    },
    handleEdit(task) {
      // console.log('listTable:',task);
      this.$emit('handleEdit', task);
    }
  }
};
</script>

<style>
</style>