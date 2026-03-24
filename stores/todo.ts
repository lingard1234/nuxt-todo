import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export type TodoPriority = 'high' | 'medium' | 'low'

export interface TodoItem {
  id: number
  title: string
  done: boolean
  priority: TodoPriority
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<TodoItem[]>([
    { id: 1, title: 'Nuxt 라우팅 확인', done: false, priority: 'high' },
    { id: 2, title: '컴포넌트 분리', done: true, priority: 'medium' }
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

  const addTodo = (title: string, priority: TodoPriority) => {
    todos.value.unshift({
      id: nextId.value,
      title,
      done: false,
      priority
    })

    nextId.value += 1
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
    toggleTodo,
    removeTodo,
    clearCompleted,
    markAllDone
  }
})
