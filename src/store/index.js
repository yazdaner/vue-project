import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2';

const store = createStore({
  state: {
    tasks: []
  },
  getters: {
    allTasks(state) {
      return state.tasks
    }
  },
  mutations: {
    setTasks(state, data) {
      state.tasks = data
    },
    newTask(state, task) {
      state.tasks.unshift(task);
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id == updatedTask.id);
      console.log(updatedTask);
      if(index != -1){
        state.tasks.splice(index,1,updatedTask);
      }
    }
  },
  actions: {
    async fetchTasks({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(response.data);
        commit('setTasks', response.data)
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: error,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }

    },
    async filterTasks({ commit }, limit) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit('setTasks', response.data)
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: error,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }

    },
    async storeTask({ commit }, title) {

      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
          title: title,
          completed: false
        });
        commit('newTask', response.data);

        Swal.fire({
          title: 'task added success!',
          position: "top",
          icon: 'success',
          timer: 3000,
          toast: true,
          timerProgressBar: true,
          showConfirmButton: false,
        })

      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: error,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    },
    async updateTask({ commit }, task) {
      try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
          id: task.id,
          title: task.title,
          completed: !task.completed,
        });
        commit('updateTask', response.data);
        Swal.fire({
          title: 'task updated success!',
          position: "top",
          icon: 'success',
          timer: 3000,
          toast: true,
          timerProgressBar: true,
          showConfirmButton: false,
        })

      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: error,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    }
  }

});

export default store
