<template>
  <div class="container">
    <form @submit.prevent="addTodoFromPage" class="row">
      <div class="form-group col-6 offset-3">
        <h2 for="inputTodo">TODOLIST</h2>
        <ul>
          <li v-for="(todo,todoList) in getTodos" :key="todoList">
           {{todo}}
           <button @click="deleteTodo(todoList)">
           削除する
          </button>
          </li>        
        </ul>
        
        <input
          v-model="todoInput"
          type="text"
          class="form-control"
          id="inputTodo"
          placeholder="TODOを入力..."
        />
      </div>
      <button type="submit" class=" col-6 offset-3 btn btn-primary btn-block">TODOを追加する</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoInput: ""
    };
  },

  methods: {
    addTodoFromPage() {
      this.$store.dispatch("addTodoFromActions", this.todoInput);
      this.todoInput ="";
    },
    deleteTodo(todoList) {
      this.$store.dispatch("deleteTodo", todoList);
    }
  },

  computed: {
    getTodos() {
    return this.$store.getters.getTodos;
    }
  }
}
</script>
