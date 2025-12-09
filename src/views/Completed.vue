<template>
  <h3>Completed ✅</h3>

  <div>
    <ul>
      <li v-for="completedTodo in completedTodos" 
          :key="completedTodo.id"
          style="margin-bottom: 8px;">
        
        <!-- Text Todo -->
        <span style="text-decoration: line-through; color: gray;">
          {{ completedTodo.text }}
        </span>

        <!-- Priority -->
        <span 
          style="
            margin-left: 10px;
            padding: 2px 6px;
            border-radius: 4px;
            background: #e5e5e5;
            font-size: 12px;
          "
        >
          Priority: {{ completedTodo.priority }}
        </span>
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
