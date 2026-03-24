<style scoped lang="scss">
.todo-board {
  border-radius: 1rem;
}

.board-container {
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
}

// 헤더
.board-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
}

.board-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
  margin-top: 0;
}

.board-subtitle {
  color: #6b7280;
  margin-bottom: 0;
  font-size: 0.95rem;
}

.progress-badge {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
}

.progress-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.progress-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: #4f46e5;
}

// 진행도
.progress-wrapper {
  margin-bottom: 2rem;
}

// 통계 카드
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
}

.stat-card {
  background: linear-gradient(135deg, #f8fafc 0%, #f4f6ff 100%);
  border: 1px solid #eceffd;
  border-radius: 0.75rem;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    border-color: #4f46e5;
    background: linear-gradient(135deg, #eef2ff 0%, #f0ecff 100%);
  }
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #4f46e5;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

// 입력 폼
.add-form {
  margin-bottom: 2rem;
}

.form-group-wrapper {
  display: grid;
  grid-template-columns: 1fr 75px 75px;
  gap: 0.75rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    .form-select {
      grid-column: 1 / 2;
    }

    .btn-add {
      grid-column: 1 / 2;
    }
  }
}

.form-input {
  padding: 0.75rem 1rem;
  border: 1px solid #eceffd;
  border-radius: 0.75rem;
  font-size: 0.95rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }

  &::placeholder {
    color: #a3a3a3;
  }
}

.form-select {
  padding: 0.75rem 0.5rem;
  border: 1px solid #eceffd;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  background: white;
  text-align: center;
  text-align-last: center;
  transition: all 0.2s;
  cursor: pointer;

  option {
    text-align: center;
  }

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }
}

.btn-add {
  border-radius: 0.75rem;
  padding-left: 0.65rem;
  padding-right: 0.65rem;
  font-size: 0.9rem;
}

// 필터 버튼
.filter-buttons {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #eceffd;
  border-radius: 0.5rem;
  color: #6b7280;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #4f46e5;
    color: #4f46e5;
    background: #f8fafc;
  }

  &.active {
    background: #4f46e5;
    border-color: #4f46e5;
    color: white;
    box-shadow: 0 2px 4px rgba(79, 70, 229, 0.2);
  }
}

// 할 일 목록
.todo-list-wrapper {
  margin-bottom: 2rem;
}

.empty-state {
  padding: 3rem 1rem;
  text-align: center;
}

.empty-message {
  color: #6b7280;
  font-size: 0.95rem;
  margin-bottom: 0;
}

.todo-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border: 1px solid #eceffd;
  border-radius: 0.75rem;
  transition: all 0.2s;

  &:hover {
    border-color: #4f46e5;
    background: #f8fafc;
  }

  &.done {
    opacity: 0.7;

    .todo-title {
      color: #a3a3a3;
    }
  }
}

.todo-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;

  input {
    appearance: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: relative;
    z-index: 1;
    margin: 0;
  }

  .checkbox-visual {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #d1d5db;
    border-radius: 0.375rem;
    transition: all 0.2s;
    background: white;
  }

  input:checked ~ .checkbox-visual {
    background: #4f46e5;
    border-color: #4f46e5;

    &::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 0.8rem;
      font-weight: 700;
    }
  }

  input:focus-visible ~ .checkbox-visual {
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }
}

.todo-content {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
}

.todo-title {
  flex: 1;
  color: #1f2937;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &.done {
    text-decoration: line-through;
    color: #6c757d;
  }
}

.todo-priority {
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;

  &.text-bg-danger {
    background: #fee2e2;
    color: #dc2626;
  }

  &.text-bg-warning {
    background: #fef3c7;
    color: #d97706;
  }

  &.text-bg-info {
    background: #dbeafe;
    color: #0284c7;
  }
}

.btn-delete {
  background: transparent;
  border: none;
  color: #ef4444;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  transition: all 0.2s;
  flex-shrink: 0;

  &:hover {
    color: #dc2626;
    background: #fee2e2;
    border-radius: 0.375rem;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.1);
  }
}

// 액션 버튼
.action-buttons {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;

    .btn {
      flex: 1;
      min-width: 140px;
    }
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/todo'
import type { TodoPriority } from '../stores/todo'
import { useTodoView } from '../composables/useTodoView'

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)
const title = ref('')
const priority = ref<TodoPriority>('medium')
const { filter, filteredTodos, priorityClass, priorityLabel } = useTodoView(todos)

const add = () => {
  if (!title.value) {
    return
  }

  todoStore.addTodo(title.value, priority.value)
  title.value = ''
  priority.value = 'medium'
}
</script>

<template>
  <section class="todo-board card border-0 shadow">
    <div class="board-container">
      <!-- 헤더 -->
      <div class="board-header">
        <div>
          <h4 class="board-title">Todo 보드</h4>
          <p class="board-subtitle">작업 목록을 관리하세요</p>
        </div>
        <div class="progress-badge">
          <span class="progress-label">진행률</span>
          <span class="progress-value">{{ todoStore.progress }}%</span>
        </div>
      </div>

      <!-- 진행도 바 -->
      <div class="progress-wrapper">
        <div class="progress" role="progressbar" :aria-valuenow="todoStore.progress"
          aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" :style="{ width: `${todoStore.progress}%` }" />
        </div>
      </div>

      <!-- 통계 카드 -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">{{ todoStore.total }}</div>
          <div class="stat-label">전체</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ todoStore.active }}</div>
          <div class="stat-label">진행중</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ todoStore.completed }}</div>
          <div class="stat-label">완료</div>
        </div>
      </div>

      <!-- 입력 폼 -->
      <form class="add-form" @submit.prevent="add">
        <div class="form-group-wrapper">
          <input
            v-model.trim="title"
            type="text"
            class="form-input"
            placeholder="새로운 할 일을 입력하세요."
            @keydown.enter="add"
          >
          <select v-model="priority" class="form-select">
            <option value="high">높음</option>
            <option value="medium">중간</option>
            <option value="low">낮음</option>
          </select>
          <button class="btn btn-primary btn-add" type="submit">추가</button>
        </div>
      </form>

      <!-- 필터 버튼 -->
      <div class="filter-buttons">
        <button
          class="filter-btn"
          :class="{ active: filter === 'all' }"
          @click="filter = 'all'"
        >
          전체
        </button>
        <button
          class="filter-btn"
          :class="{ active: filter === 'active' }"
          @click="filter = 'active'"
        >
          진행중
        </button>
        <button
          class="filter-btn"
          :class="{ active: filter === 'done' }"
          @click="filter = 'done'"
        >
          완료
        </button>
      </div>

      <!-- 할 일 목록 -->
      <div class="todo-list-wrapper">
        <div v-if="filteredTodos.length === 0" class="empty-state">
          <p class="empty-message">표시할 항목이 없습니다</p>
        </div>

        <transition-group v-else name="list" tag="div" class="todo-list">
          <div v-for="todo in filteredTodos" :key="todo.id" class="todo-item">
            <label class="todo-checkbox">
              <input
                :checked="todo.done"
                type="checkbox"
                @change="todoStore.toggleTodo(todo.id)"
              >
              <span class="checkbox-visual"></span>
            </label>

            <div class="todo-content">
              <span class="todo-title" :class="{ done: todo.done }">{{ todo.title }}</span>
              <span class="todo-priority" :class="priorityClass(todo.priority)">
                {{ priorityLabel(todo.priority) }}
              </span>
            </div>

            <button
              class="btn-delete"
              @click="todoStore.removeTodo(todo.id)"
              title="삭제"
            >
              ✕
            </button>
          </div>
        </transition-group>
      </div>

      <!-- 액션 버튼 -->
      <div class="action-buttons">
        <button class="btn btn-sm btn-outline-secondary" @click="todoStore.clearCompleted">
          완료 항목 비우기
        </button>
        <button class="btn btn-sm btn-outline-success" @click="todoStore.markAllDone">
          전체 완료
        </button>
      </div>
    </div>
  </section>
</template>
