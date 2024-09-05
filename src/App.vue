<template>
  <div class="container">
    <header class="text-center text-light my-4">
      <comp-title />
    </header>

    <comp-control
      v-bind:orderBy="orderBy"
      v-bind:orderDir="orderDir"
      v-on:handleSort="handleSort"
    />

    <todo-list-table
      v-on:handleDelete="handleDelete"
      v-on:handleEdit="handleEdit"
    />
    <comp-form
      v-bind:taskSelected="taskSelected"
      v-bind:title="title"
      v-on:handleAddNew="handleAddNew"
      v-on:handleCancel="handleCancel"
      v-on:handleUpdate="handleUpdate"
    />
  </div>
</template>

<script>

import TodoListTable from "./components/TodoListTable.vue";
import CompTitle from "./components/CompTitle.vue";
import CompControl from "./components/CompControl.vue";
import CompForm from "./components/CompForm.vue";

export default {
  name: "app",
  data() {
    return {
      orderBy: "name",
      orderDir: "asc",
      taskSelected: null,
      title: "Add",
    };
  },
  computed: {
    // listTaskSearch() {
    //   const { strSearch } = this;
    //   var newItem = this.listTask.filter((item) => {
    //     return item.taskName.toLowerCase().includes(strSearch.toLowerCase());
    //   });
    //   return newItem;
    // },
    listTaskSort() {
      var listTask = [...this.listTaskSearch];
      if (this.orderBy === "name") {
        listTask.sort(this.compareName);
      } else if (this.orderBy === "level") listTask.sort(this.compareLevel);
      return listTask;
    },
  },
  components: {
    TodoListTable,
    CompTitle,
    CompControl,
    CompForm
  },
  methods: {
    compareName(a, b) {
      var numberSort = this.orderDir === "asc" ? -1 : 1;
      if (a.taskName < b.taskName) return numberSort;
      else if (a.taskName > b.taskName) return numberSort * -1;
      return 0;
    },
    compareLevel(a, b) {
      var numberSort = this.orderDir === "asc" ? -1 : 1;
      if (a.level < b.level) return numberSort;
      else if (a.level > b.level) return numberSort * -1;
      return 0;
    },
    handleSort(orderBy, orderDir) {
      this.orderBy = orderBy;
      this.orderDir = orderDir;
      // console.log(orderBy, '-', orderDir);
    },
    handleDelete(task) {
      // console.log('App: ', task);
      this.listTask = this.listTask.filter((item) => item.id !== task.id);
    },
    handleEdit(task) {
      this.taskSelected = task;
      this.title = "Update";
    },
    handleAddNew(id, taskName, level) {
      let objTask = {
        id: id,
        taskName: taskName,
        level: level,
      };
      this.listTask.push(objTask);
      // console.log(id, '-', taskName, '-', level);
    },
    handleCancel() {
      this.taskSelected = null;
    },
    handleUpdate(id, taskName, level) {
      let index = this.listTask.findIndex((item) => item.id === id);
      if (index !== -1) {
        let objTask = {
          id: id,
          taskName: taskName,
          level: level,
        };
        this.listTask.splice(index, 1, objTask);
        this.title = "Add";
        this.taskSelected = null;
      }
    },
  },
};
</script>

<style>
body {
  background: #352f5b;
  font-family: "Josefin Sans", sans-serif;
  font-size: 23px;
}

.container {
  max-width: 400px;
}

input[type="text"],
input[type="text"]:focus {
  color: #fff;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  max-width: 400px;
}

.todos li {
  background: #423a6f;
  color: #fff;
}

.delete {
  cursor: pointer;
}

.filtered {
  display: none !important;
}

.btn:hover {
  background: #423a6f;
  color: #fff;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-radius: 13px 13px;
  transition: 0.8s;
}
</style>
