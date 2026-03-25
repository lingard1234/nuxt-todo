import type { TodoPriority } from "../stores/todo";

// 우선순위에 따른 CSS 클래스와 레이블 매핑
export const PRIORITY_CLASS: Record<TodoPriority, string> = {
  high: "text-bg-danger",
  medium: "text-bg-warning",
  low: "text-bg-info",
};

export const PRIORITY_LABEL: Record<TodoPriority, string> = {
  high: "높음",
  medium: "중간",
  low: "낮음",
};

export const getPriorityClass = (value: TodoPriority) => PRIORITY_CLASS[value];

export const getPriorityLabel = (value: TodoPriority) => PRIORITY_LABEL[value];
