<template>
  <div class="container">
    <header class="text-center text-light my-4">
      <comp-title />
    </header>

    <comp-control/>

    <todo-list-table
    />
    <comp-form
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

    };
  },
  components: {
    TodoListTable,
    CompTitle,
    CompControl,
    CompForm
  },
  methods: {

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
