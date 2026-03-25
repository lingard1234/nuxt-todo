import { onMounted, watch } from 'vue'
import type { TodoItem, TodoPriority } from '../stores/todo'
import type { useTodoStore } from '../stores/todo'

const isPriority = (value: unknown): value is TodoPriority => {
  return value === 'high' || value === 'medium' || value === 'low'
}

const isTodoItem = (value: unknown): value is TodoItem => {
  if (!value || typeof value !== 'object') {
    return false
  }

  const item = value as Record<string, unknown>

  return typeof item.id === 'number'
    && typeof item.title === 'string'
    && typeof item.done === 'boolean'
    && isPriority(item.priority)
}

export const useTodoPersist = (todoStore: ReturnType<typeof useTodoStore>, storageKey = 'nuxt-todos') => {
  if (!import.meta.client) {
    return
  }

  onMounted(() => {
    try {
      const raw = window.localStorage.getItem(storageKey)

      if (!raw) {
        return
      }

      const parsed = JSON.parse(raw) as unknown

      if (!Array.isArray(parsed)) {
        return
      }

      const safeTodos = parsed.filter((item): item is TodoItem => isTodoItem(item))

      todoStore.replaceTodos(safeTodos)
    } catch {
      // no-op
    }
  })

  watch(
    () => todoStore.todos,
    (value) => {
      window.localStorage.setItem(storageKey, JSON.stringify(value))
    },
    { deep: true }
  )
}
