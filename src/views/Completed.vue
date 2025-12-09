<template>
    <h3>Completed ✅</h3>
    <div>
      <ul>
        <li v-for="completedTodo in completedTodos" :key="completedTodo.id">
          {{ completedTodo.text }}
        </li>
      </ul>
    </div>
</template>

<script>
import { useTodos } from '@/stores/todos';
import { mapState } from 'pinia';

export default {
    computed: {
    ...mapState(useTodos, [
      'completedTodos',
    ])
  }
}
</script>