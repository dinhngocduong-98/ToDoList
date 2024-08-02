<template>
  <div class="container">
    <header class="text-center text-light my-4">
      <comp-title />
    </header>

    <comp-control
      v-bind:strSearch = 'strSearch'
      v-bind:orderBy = 'orderBy'
      v-bind:orderDir = 'orderDir'
      v-on:handleSearch = 'handleSearch'
      v-on:handleSort = 'handleSort'
    />

    <todo-list-table
		v-bind:listTask = "listTaskSearch"
	/>
    <comp-form />
  </div>
</template>

<script>
import TodoListTable from "./components/TodoListTable.vue";
import CompTitle from "./components/CompTitle.vue";
import CompControl from "./components/CompControl.vue";
import CompForm from "./components/CompForm.vue";

import listTask from './mocks/tasks'

export default {
  name: "app",
  data() {
    return {
		listTask: listTask,
    strSearch: '',
    orderBy: 'name',
    orderDir: 'ASC'
	};
  },
  computed: {
    listTaskSearch() {
      const { strSearch } = this;
      // var newItem = [];
      // this.listTask.forEach(function(item, index){
      //   let taskNameRaw = item.taskName.toLowerCase();
      //   let strSearchRaw = strSearch.toLowerCase();
      //   if(item.taskName && taskNameRaw.includes(strSearchRaw)){
      //     newItem.push(item);
      //   }
      // }) 
      var newItem = this.listTask.filter(item => {
        return item.taskName.toLowerCase().includes(strSearch.toLowerCase());
      });
      return newItem;
    },
    listTaskSort() {
      var listTask = this.listTask
      listTask.sort(this.compareName())
    }

  },
  components: {
    TodoListTable,
    CompTitle,
    CompControl,
    CompForm,
  },
  methods: {
    compareName(a,b) {
      var numberSort = this.orderDir === 'asc' ? -1 : 1;
      if(a.name < b.name) return numberSort;
      else if (a.name > b.name) return numberSort * (-1);
      return 0;
    },
    compareLevel(a, b) {
      var numberSort = this.orderDir === 'asc' ? -1 : 1;
      if(a.level < b.level) return numberSort;
      else if (a.level > b.level) return numberSort * (-1);
      return 0;
    },
    handleSearch(data) {
      this.strSearch = data;
    },
    handleSort(orderBy, orderDir) {
      this.orderBy = orderBy;
      this.orderDir = orderDir;
    }
  }
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
