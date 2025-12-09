<template>
  <h3>To-Do ⏳</h3>
  <div>
    <ul>
      <!-- FORM INPUT -->
      <form @submit.prevent="handleAddTodo">
        <input
          v-model="todo.text"
          type="text"
          placeholder="What to do?"
        />

        <!-- PRIORITY SELECT -->
        <select v-model="todo.priority">
          <option disabled value="">Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button
          :disabled="!todo.text || !todo.priority"
          type="submit"
        >
          Add
        </button>
      </form>

      <!-- LIST TODOS -->
      <li
        v-for="pendingTodo in pendingTodos"
        :key="pendingTodo.id"
      >
        <span>{{ pendingTodo.text }}</span>

        <!-- PRIORITY TAG -->
        <span :class="'priority ' + pendingTodo.priority">
          ({{ pendingTodo.priority }})
        </span>

        <button
          @click="updateTodo({ ...pendingTodo, isCompleted: true })"
        >
          Done
        </button>

        <button @click="destroyTodo(pendingTodo.id)">
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTodos } from "@/stores/todos";
import { mapState, mapActions } from "pinia";

export default {
  data: () => ({
    todo: {
      text: "",
      priority: "",
      isCompleted: false,
    }
  }),

  computed: {
    ...mapState(useTodos, ["pendingTodos"])
  },

  methods: {
    ...mapActions(useTodos, ["storeTodo", "updateTodo", "destroyTodo"]),

    handleAddTodo() {
      this.storeTodo(this.todo);

      // Reset form
      this.todo = {
        text: "",
        priority: "",
        isCompleted: false,
      };
    }
  }
};
</script>

<style scoped>
/* PRIORITY COLORS */
.priority {
  margin-left: 8px;
  font-weight: bold;
}

.priority.low {
  color: green;
}

.priority.medium {
  color: orange;
}

.priority.high {
  color: red;
}
</style>
