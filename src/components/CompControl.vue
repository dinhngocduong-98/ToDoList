<template>
  <div>
    <form class="search">
      <input
        class="form-control m-auto"
        type="text"
        name="search"
        placeholder="search todos"
      />
      <span>
      <button>Clear</button>
      </span>
    </form>
    <b-dropdown text="SortBy">
      <b-dropdown-item>Name ASC</b-dropdown-item>
      <b-dropdown-item>Name DESC</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Level ASC</b-dropdown-item>
      <b-dropdown-item>Level DESC</b-dropdown-item>
    </b-dropdown>
    <span
      v-bind:style="{
        backgroundColor: 'white',
      }"
      >NAME - DESC</span
    >
  </div>
</template>

<script>
export default {
  name: "comp-control",
  data() {
    return {};
  },
};
</script>

<style>
</style>