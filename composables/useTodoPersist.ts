import { onMounted, watch } from "vue";
import type { TodoItem, TodoPriority } from "../stores/todo";
import type { useTodoStore } from "../stores/todo";

// 우선순위 값인지 확인하는 타입 가드 함수
const isPriority = (value: unknown): value is TodoPriority => {
  return value === "high" || value === "medium" || value === "low";
};

// 객체가 TodoItem 형태인지 확인하는 타입 가드 함수
const isTodoItem = (value: unknown): value is TodoItem => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const item = value as Record<string, unknown>;

  return (
    typeof item.id === "number" &&
    typeof item.title === "string" &&
    typeof item.done === "boolean" &&
    isPriority(item.priority)
  );
};

// 할 일 목록을 로컬 스토리지에 저장하고 불러오는 기능 담당
export const useTodoPersist = (
  todoStore: ReturnType<typeof useTodoStore>,
  storageKey = "nuxt-todos",
) => {
  if (!import.meta.client) {
    return;
  }

// 컴포넌트가 마운트될 때 로컬 스토리지에서 할 일 목록을 불러옴
  onMounted(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);

      if (!raw) {
        return;
      }

      const parsed = JSON.parse(raw) as unknown;

      if (!Array.isArray(parsed)) {
        return;
      }

      const safeTodos = parsed.filter((item): item is TodoItem =>
        isTodoItem(item),
      );

      todoStore.replaceTodos(safeTodos);
    } catch {
      // no-op
    }
  });

  // 할 일 목록이 변경될 때마다 로컬 스토리지에 저장
  watch(
    () => todoStore.todos,
    (value) => {
      window.localStorage.setItem(storageKey, JSON.stringify(value));
    },
    { deep: true },
  );
};
