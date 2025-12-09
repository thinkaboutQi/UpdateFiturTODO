<template>
  <h3>To-Do ⏳</h3>
  <div>
    <ul>
      <form @submit.prevent="storeTodo(todo)">
    <input v-model="todo.text" type="text" name="text" />
    <button :disabled="!todo.text" type="submit">Add</button>
  </form>
      <li v-for="pendingTodo in pendingTodos" :key="pendingTodo.id">
        <span>{{ pendingTodo.text }}</span>
         <button @click="updateTodo({ ...pendingTodo, isCompleted: true})">Done</button>
          <button @click="destroyTodo(pendingTodo.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

  <script>
  import { useTodos } from '@/stores/todos';
  import { mapState } from 'pinia';
  import { mapActions} from 'pinia';

  export default {
    computed: {
    ...mapState(useTodos, [
      'pendingTodos',
    ])
  },
  data: () => ({
    todo: {
      text: null,
      isCompleted: false,
    }
  }),
  methods: {
    ...mapActions(useTodos, [
      'storeTodo',
       'updateTodo',
       'destroyTodo',
    ]),
  }
  }
  </script>