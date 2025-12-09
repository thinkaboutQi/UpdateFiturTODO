import { defineStore } from "pinia"

export const useTodos = defineStore('useTodos', {
  // Add below codes
  state: () => ({
    nextId: 0,
    todos: [],
  }),
  getters: {
    pendingTodos: (state) => {
      return state.todos.filter(todo => !todo.isCompleted)
    },
    completedTodos: (state) => {
      return state.todos.filter(todo => todo.isCompleted)
    }
  },
  actions: {
    storeTodo(payload) {
      this.todos.push({ id: this.nextId++, text: payload.text, isCompleted: false })
    },
    updateTodo(payload) {
      const index = this.todos.findIndex(item => item.id == payload.id)
      if (index != -1) {
        this.todos[index] = { ...this.todos[index], text: payload.text, isCompleted: payload.isCompleted }
      }
    },
     destroyTodo(id) {
      const index = this.todos.findIndex(item => item.id == id)

      if (index > -1 && index < this.todos.length) {
        this.todos.splice(index, 1)
      }
    },
  },
})