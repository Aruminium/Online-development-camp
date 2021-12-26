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
      }
    },
    actions: {
      addTodoFromActions({ commit }, todoInput) {
        commit("addTodoFromMutations", todoInput);
      }
    }
  });
};
export default createStore; 