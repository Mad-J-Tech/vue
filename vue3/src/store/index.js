import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [
            { id: 1, comment: "test", status: false }
        ]
    },
    getters: {
        todos: state => state.todos,
    },
    mutations: {
        doAdd(state, comment) {
            state.todos.push({
                id: state.todos.length + 1,
                comment: comment,
                status: false,
            })
        }
    }
})

export default store