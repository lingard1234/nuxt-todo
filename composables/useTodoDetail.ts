import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTodoStore } from "../stores/todo";

// 할 일 상세 페이지 담당
export const useTodoDetail = () => {
  const route = useRoute();
  const router = useRouter();
  const todoStore = useTodoStore();

  const todoId = computed(() => Number(route.params.id)); // 라우트에서 id 파라미터를 가져와 숫자로 변환
  const todo = computed(
    () => todoStore.todos.find((item) => item.id === todoId.value), // todoStore에서 해당 id의 todo를 찾음
  );

  const isActive = (id: number) => id === todoId.value;

  const deleteAndRedirect = (message = "이 할 일을 삭제하시겠습니까?") => {
    const confirmed = import.meta.client ? window.confirm(message) : true; // 클라이언트에서만 confirm 창을 띄우고, 서버에서는 자동으로 true로 처리

    if (!confirmed) {
      return;
    }

    todoStore.removeTodo(todoId.value);
    router.push("/todos"); // 삭제 후 목록 페이지로 리디렉션
  };

  return {
    route,
    todoStore,
    todoId,
    todo,
    isActive,
    deleteAndRedirect,
  };
};
