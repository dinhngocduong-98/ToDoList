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

export default {
  name: "comp-form",
  props: {
    taskSelected: {
      type: Object,
      default: {}
    },
    title: {
      type: String,
      default: 'Add'
    }
  },
  data() {
    return {
      taskName: '',
      level: 0
    };
  },
  // beforeUpdate() {
  //   console.log('log');
  //   //tu dong chay khi co su thay doi ve data
  //   if(this.taskSelected !== null) {
  //     // nguoi dung click vao button edit
  //     console.log('1');
  //     this.taskName = this.taskSelected.taskName;
  //     this.level = this.taskSelected.level;
  //   }
  // },
  watch: {
    taskSelected:function(newData, oldData) {
      if(newData !== null) {
        // nguoi dung click vao button edit
        this.taskName = newData.taskName;
        this.level = newData.level;
      }
    }
  },
  methods: {
    handleAddNew() {
      this.$emit('handleAddNew', uuid(), this.taskName, parseInt(this.level));
      this.handleResetData();
    },
    handleResetData() {
      this.taskName = '';
      this.level = 0;
    },
    handleCancel() {
      this.$emit('handleCancel');
      this.handleResetData();
    },
    handleUpdate() {
      this.$emit('handleUpdate', this.taskSelected.id, this.taskName, parseInt(this.level));
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