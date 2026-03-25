import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export type TodoPriority = 'high' | 'medium' | 'low'

export interface TodoItem {
  id: number
  title: string
  done: boolean
  priority: TodoPriority
  tags?: string[]
  dueDate?: string | null
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<TodoItem[]>([
    {
      id: 1,
      title: 'Nuxt 라우팅 확인',
      done: false,
      priority: 'high',
      tags: ['nuxt', 'routing'],
      dueDate: null
    },
    {
      id: 2,
      title: '컴포넌트 분리',
      done: true,
      priority: 'medium',
      tags: ['refactor'],
      dueDate: null
    }
  ])
  const nextId = ref(3)

  const total = computed(() => todos.value.length)
  const completed = computed(() => todos.value.filter((item) => item.done).length)
  const active = computed(() => total.value - completed.value)
  const progress = computed(() => {
    if (total.value === 0) {
      return 0
    }

    return Math.round((completed.value / total.value) * 100)
  })

  const addTodo = (
    title: string,
    priority: TodoPriority,
    options?: {
      tags?: string[]
      dueDate?: string | null
    }
  ) => {
    todos.value.unshift({
      id: nextId.value,
      title,
      done: false,
      priority,
      tags: options?.tags || [],
      dueDate: options?.dueDate || null
    })

    nextId.value += 1
  }

  const replaceTodos = (items: TodoItem[]) => {
    todos.value = [...items]
    const maxId = items.reduce((acc, item) => Math.max(acc, item.id), 0)
    nextId.value = maxId + 1
  }

  const toggleTodo = (id: number) => {
    const target = todos.value.find((item) => item.id === id)

    if (!target) {
      return
    }

    target.done = !target.done
  }

  const removeTodo = (id: number) => {
    todos.value = todos.value.filter((item) => item.id !== id)
  }

  const clearCompleted = () => {
    todos.value = todos.value.filter((item) => !item.done)
  }

  const markAllDone = () => {
    todos.value = todos.value.map((item) => ({
      ...item,
      done: true
    }))
  }

  return {
    todos,
    total,
    completed,
    active,
    progress,
    addTodo,
    replaceTodos,
    toggleTodo,
    removeTodo,
    clearCompleted,
    markAllDone
  }
})
