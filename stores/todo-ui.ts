import { computed, ref } from "vue";
import { defineStore } from "pinia";

export type TodoFilter = "all" | "active" | "done";

export const useTodoUiStore = defineStore("todo-ui", () => {
  const filter = ref<TodoFilter>("all");
  const searchQuery = ref("");
  const dateFrom = ref("");
  const dateTo = ref("");
  const page = ref(1);

  const hasAdvancedFilter = computed(() => {
    return !!searchQuery.value || !!dateFrom.value || !!dateTo.value;
  });

  const setFilter = (value: TodoFilter) => {
    filter.value = value;
    page.value = 1;
  };

  const setSearchQuery = (value: string) => {
    searchQuery.value = value;
    page.value = 1;
  };

  const setDateRange = (from: string, to: string) => {
    dateFrom.value = from;
    dateTo.value = to;
    page.value = 1;
  };

  const setPage = (value: number) => {
    page.value = Math.max(1, value);
  };

  const resetFilters = () => {
    filter.value = "all";
    searchQuery.value = "";
    dateFrom.value = "";
    dateTo.value = "";
    page.value = 1;
  };

  return {
    filter,
    searchQuery,
    dateFrom,
    dateTo,
    page,
    hasAdvancedFilter,
    setFilter,
    setSearchQuery,
    setDateRange,
    setPage,
    resetFilters,
  };
});
