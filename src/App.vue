<template>
	<div class="container">
      <header class="text-center text-light my-4">
        <h1 class="mb-4">Todo List</h1>
        <form class="search">
          <input
            class="form-control m-auto"
            type="text"
            name="search"
            placeholder="search todos"
          />
        </form>
      </header>

      <ul class="list-group todos mx-auto text-light delete">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>Go to the grocery</span>
          <i class="far fa-trash-alt delete"></i>
		  <button>edit</button>
        </li>
		

        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>Do the Laundry</span>
          <i class="far fa-trash-alt delete"></i>
        </li>

        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>Walk the dog</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
      </ul>

      <form class="add text-center my-4">
        <label class="text-light">Add a new todo...</label>
        <input class="form-control m-auto" type="text" name="add" />
        <br />
        <div class="text-center">
          <input type="submit" class="btn btn-light" />
        </div>
      </form>
    </div>
</template>

<script>

export default {
	name: 'app',
	data () {
		return {

		}
	},
	components: {

	}
}
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
