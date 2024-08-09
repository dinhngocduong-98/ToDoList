<template>
  <div>
    <form class="search" @submit.prevent>
      <input
        v-bind:value = "strSearch"
        v-on:input = "handleSearch"
        class="form-control m-auto"
        type="text"
        name="search"
        placeholder="search todos"
      />
      <span>
      <button
        v-on:click = "handleClear"
      >Clear</button>
      </span>
    </form>
    <div >
    <b-dropdown text="SortBy">
      <b-dropdown-item v-on:click = "handleSort('name', 'asc')">Name ASC</b-dropdown-item>
      <b-dropdown-item v-on:click = "handleSort('name', 'desc')">Name DESC</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item v-on:click = "handleSort('level', 'asc')">Level ASC</b-dropdown-item>
      <b-dropdown-item v-on:click = "handleSort('level', 'desc')">Level DESC</b-dropdown-item>
    </b-dropdown>
    <span
      class = "upper-case"
      >{{ orderBy }} - {{ orderDir }}
    </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "comp-control",
  data() {
    return {};
  },
  props: {
    strSearch: {
      type: String,
      default: ''
    },
    orderBy: {
      type: String,
      default: 'name'
    },
    orderDir: {
      type: String,
      default: 'asc'
    }
  },
  methods: {
    handleClear() {
      this.$emit('handleSearch', '');
    },
    handleSearch(e) {
      this.$emit('handleSearch', e.target.value);
    },
    handleSort(orderBy, orderDir) {
        this.$emit('handleSort', orderBy, orderDir)
    }
  }
};
</script>

<style>
  .upper-case {
    text-transform: uppercase;
    background-color: white;
    color: blue;
  }
</style>