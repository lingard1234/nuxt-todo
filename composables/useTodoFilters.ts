import { computed, watch } from "vue";
import type { Ref } from "vue";
import type { TodoItem } from "../stores/todo";
import type { useTodoUiStore } from "../stores/todo-ui";

const PAGE_SIZE = 5; // 한 페이지당 표시할 할 일 수

const toDateTime = (value?: string | null) => {
  if (!value) {
    return null;
  }

  const time = new Date(value).getTime();
  return Number.isNaN(time) ? null : time;
};

export const useTodoFilters = (
  todos: Ref<TodoItem[]>,
  uiStore: ReturnType<typeof useTodoUiStore>,
) => {
  const filteredTodos = computed(() => {
    const query = uiStore.searchQuery.trim().toLowerCase();
    const from = toDateTime(uiStore.dateFrom);
    const to = toDateTime(uiStore.dateTo);

    // 필터링 로직: 상태, 검색어, 날짜 범위에 따라 할 일 목록을 필터링
    return todos.value.filter((todo) => {
      if (uiStore.filter === "active" && todo.done) {
        return false;
      }

      if (uiStore.filter === "done" && !todo.done) {
        return false;
      }

      if (query && !todo.title.toLowerCase().includes(query)) {
        return false;
      }

      if (from !== null || to !== null) {
        const due = toDateTime(todo.dueDate);

        if (due === null) {
          return false;
        }

        if (from !== null && due < from) {
          return false;
        }

        if (to !== null && due > to) {
          return false;
        }
      }

      return true;
    });
  });

  const totalFiltered = computed(() => filteredTodos.value.length);

  const totalPages = computed(() => {
    if (totalFiltered.value === 0) {
      return 1;
    }

    return Math.ceil(totalFiltered.value / PAGE_SIZE);
  });

  watch(totalPages, (value) => {
    if (uiStore.page > value) {
      uiStore.setPage(value);
    }
  });

  const pagedTodos = computed(() => {
    const start = (uiStore.page - 1) * PAGE_SIZE;
    return filteredTodos.value.slice(start, start + PAGE_SIZE);
  });

  return {
    filteredTodos,
    pagedTodos,
    totalFiltered,
    totalPages,
  };
};
