import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);



const store = new Vuex.Store({

    plugins: [createPersistedState({ storage: window.sessionStorage })],

    state: {
        todos: [

        ]
    },
    getters: {
        todos: state => state.todos,
        doneTodos: state => {
            return state.todos.filter(todo => todo.status)
        },
        currentTodos: state => {
            return state.todos.filter(todo => !todo.status)
        },

    },
    mutations: {
        doAdd(state, comment) {
            state.todos.push({
                id: state.todos.length,
                comment: comment,
                status: Boolean(false),
            })
        },
        doRemove(state, index) {
            state.todos.splice(index, 1)
        },

        reNumber(state) {
            state.todos.forEach(function (el, index) {
                state.todos[index].id = index;
            })
        },
        changeStatus(state, index) {
            state.todos[index].status = !state.todos[index].status;
        },


    }
})

export default store