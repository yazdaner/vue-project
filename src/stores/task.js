import { defineStore } from 'pinia';
import axios from 'axios'
import Swal from 'sweetalert2';

export const useTaskStore = defineStore('task',{
    state: ()  => {
        return {
            tasks: []
        }
    },
    getters: {
        allTasks() {
            return this.tasks
        }
    },
    actions: {
        async fetchTasks() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
                this.tasks = response.data
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            }

        },
        async filterTasks(limit) {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
                this.tasks = response.data
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            }

        },
        async storeTask(title) {

            try {
                const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                    title: title,
                    completed: false
                });
                this.tasks.unshift(response.data);
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
        async updateTask(task) {
            try {
                const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
                    id: task.id,
                    title: task.title,
                    completed: !task.completed,
                });
                const index = this.tasks.findIndex(task => task.id == response.data.id);
                if (index != -1) {
                    this.tasks.splice(index, 1, response.data);
                }
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
        },
        async deleteTask(id) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
                this.tasks = this.tasks.filter(task => task.id != id);
                Swal.fire({
                    title: 'task deleted success!',
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
})
