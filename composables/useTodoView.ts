import { computed, ref } from "vue";
import type { Ref } from "vue";
import type { TodoItem, TodoPriority } from "../stores/todo";

export type TodoFilter = "all" | "active" | "done";

export const useTodoView = (todos: Ref<TodoItem[]>) => {
  const filter = ref<TodoFilter>("all");

  const filteredTodos = computed(() => {
    if (filter.value === "active") {
      return todos.value.filter((todo) => !todo.done);
    }

    if (filter.value === "done") {
      return todos.value.filter((todo) => todo.done);
    }

    return todos.value;
  });

  const priorityClass = (value: TodoPriority) => {
    if (value === "high") {
      return "text-bg-danger";
    }

    if (value === "medium") {
      return "text-bg-warning";
    }

    return "text-bg-success";
  };

  const priorityLabel = (value: TodoPriority) => {
    if (value === "high") {
      return "높음";
    }

    if (value === "medium") {
      return "중간";
    }

    return "낮음";
  };

  return {
    filter,
    filteredTodos,
    priorityClass,
    priorityLabel,
  };
};
