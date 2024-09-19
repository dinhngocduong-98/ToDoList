<template>
  <form class="add text-center my-4" @submit.prevent>
    <label class="text-light">Add a new todo...</label>
    <br />
    <select
      v-model="level"
    >
      <option value="0">Smail</option>
      <option value="1">Medium</option>
      <option value="2">High</option>
    </select>
    <br />
    <input
      v-model="taskName"
      class="form-control m-auto" type="text" name="add" />
    <br />
    <div class="text-center">
      <button
        v-on:click = "handleClick"
        type="submit" class="btn btn-light">
        {{ title }}
      </button>
      <button
        v-on:click = "handleCancel"
      >Cancel</button>
    </div>
  </form>
</template>

<script>
import { v4 as uuid } from 'uuid';
import {  mapActions, mapState } from 'vuex'

export default {
  name: "comp-form",
  data() {
    return {
      taskName: '',
      level: 0
    };
  },
  computed: {
    ...mapState([ 'taskSelected', 'title' ])
  },
  watch: {
    taskSelected:function(newData) {
      console.log(newData);
      if(newData !== null) {
        // nguoi dung click vao button edit
        this.taskName = newData.taskName;
        this.level = newData.level;
      }
    }
  },
  methods: {
    ...mapActions(
      {
        'actionHandleAddNew': 'handleAddNew',
        'actionHandleCancel': 'handleCancel',
        'actionHandleUpdate': 'handleUpdate'
      }
    ),
    handleAddNew() {
      let objTask = {
            id: uuid(),
            taskName: this.taskName,
            level: this.level,
          };
      this.actionHandleAddNew(objTask);
      this.handleResetData();
    },
    handleResetData() {
      this.taskName = '';
      this.level = 0;
    },
    handleCancel() {
      this.actionHandleCancel();
      this.handleResetData();
    },
    handleUpdate() {
      let objTask = {
            id: this.taskSelected.id,
            taskName: this.taskName,
            level: parseInt(this.level),
          };
      this.actionHandleUpdate(objTask);
      this.handleResetData();
    },
    handleClick() {
      if(this.taskSelected === null)
        this.handleAddNew();
      else
        this.handleUpdate();
    }
  }
};
</script>

<style>
</style>