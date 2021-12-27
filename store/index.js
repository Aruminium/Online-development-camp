import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      
      todos: []
    },
    getters: {
      
      getTodos: state =>state.todos
    },
    mutations: {
      
      addTodoFromMutations(state, todo) {
        state.todos.push(todo);
      },
      deleteTodo(state, index) {

        state.todos.splice(index, 1);
      },
    },
    actions: {
      addTodoFromActions({ commit }, todoInput) {
        commit("addTodoFromMutations", todoInput);
      },

      deleteTodo({ commit }, todoIndex) {
        commit('deleteTodo', todoIndex)
      }
    }
  });
};
export default createStore; 