<template>
  <section class="page-section">
    <div class="back-button mb-4">
      <NuxtLink to="/todos" class="btn btn-sm btn-outline-secondary">← 목록으로</NuxtLink>
    </div>

    <div class="detail-grid">
      <div class="card border-0 shadow quick-nav-card">
        <div class="card-body">
          <p class="text-secondary small mb-3">다른 할 일 보기</p>
          <div class="quick-nav-list">
            <NuxtLink
              v-for="item in todoStore.todos"
              :key="item.id"
              :to="`/todos/${item.id}`"
              class="quick-nav-item"
              :class="{ active: isActive(item.id) }"
            >
              <span class="item-id">#{{ item.id }}</span>
              <span class="item-content">
                <span class="item-title">{{ item.title }}</span>
                <span v-if="item.done" class="item-status">완료</span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="card border-0 shadow detail-content">
        <div class="card-body">
          <div v-if="todo">
            <div class="detail-header mb-4">
              <span class="badge text-bg-dark me-2">ID {{ route.params.id }}</span>
              <span
                class="badge"
                :class="todo.done ? 'text-bg-success' : 'text-bg-warning'"
              >
                {{ todo.done ? '✓ 완료' : '진행중' }}
              </span>
            </div>

            <div class="detail-section mb-4">
              <p class="detail-label">제목</p>
              <h2 class="detail-title">{{ todo.title }}</h2>
            </div>

            <div class="detail-section mb-4">
              <p class="detail-label">우선순위</p>
              <span class="badge" :class="getPriorityClass(todo.priority)">
                {{ getPriorityLabel(todo.priority) }}
              </span>
            </div>

            <div class="detail-actions">
              <button
                class="btn btn-primary"
                @click="todoStore.toggleTodo(todo.id)"
              >
                {{ todo.done ? '다시 시작' : '완료 처리' }}
              </button>
              <button
                class="btn btn-outline-danger"
                @click="handleDelete"
              >
                삭제
              </button>
            </div>
          </div>

          <div v-else class="empty-detail">
            <p class="text-secondary mb-3">해당 ID의 할 일이 없습니다.</p>
            <NuxtLink to="/todos" class="btn btn-outline-primary">목록으로 돌아가기</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTodoStore } from '../../stores/todo'
import type { TodoPriority } from '../../stores/todo'

const route = useRoute()
const router = useRouter()
const todoStore = useTodoStore()

const todoId = computed(() => Number(route.params.id))
const todo = computed(() => todoStore.todos.find((item) => item.id === todoId.value))

const isActive = (id: number) => id === todoId.value

const getPriorityClass = (priority: TodoPriority) => {
  const classes: Record<TodoPriority, string> = {
    high: 'text-bg-danger',
    medium: 'text-bg-warning',
    low: 'text-bg-info',
  }
  return classes[priority] || 'text-bg-secondary'
}

const getPriorityLabel = (priority: TodoPriority) => {
  const labels: Record<TodoPriority, string> = {
    high: '높음',
    medium: '중간',
    low: '낮음',
  }
  return labels[priority] || priority
}

const handleDelete = () => {
  if (confirm('이 할 일을 삭제하시겠습니까?')) {
    todoStore.removeTodo(todoId.value)
    router.push('/todos')
  }
}
</script>

<style scoped lang="scss">
.quick-nav-card {
  height: fit-content;
  position: sticky;
  top: 100px;

  @media (max-width: 1024px) {
    position: static;
  }
}

.quick-nav-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 400px;
  overflow-y: auto;
}

.detail-content {
  min-height: 400px;
}

.detail-header {
  padding-bottom: 1rem;
  border-bottom: 1px solid #eceffd;
}

.detail-section {
  padding-bottom: 1rem;
}

.detail-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
  margin-top: 0;
}

.detail-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.detail-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;

    .btn {
      width: 100%;
    }
  }
}

.empty-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  text-align: center;

  p {
    margin-bottom: 1.5rem;
  }
}
</style>
