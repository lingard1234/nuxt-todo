<template>
    <section class="page-section">
        <div class="page-header">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <div>
                    <h1 class="page-title">할 일 목록</h1>
                    <p class="page-subtitle">모든 할 일을 관리하세요</p>
                </div>
                <NuxtLink to="/" class="btn btn-sm btn-outline-secondary">← 홈</NuxtLink>
            </div>
        </div>

        <TodoBoard class="mb-3" />

        <div class="quick-nav-section">
            <div class="card border-0 shadow">
                <div class="card-body">
                    <h5 class="mb-3">상세 페이지</h5>
                    <div class="quick-nav-grid">
                        <NuxtLink v-for="todo in todoStore.todos" :key="todo.id" :to="`/todos/${todo.id}`"
                            class="quick-nav-btn" :class="{ 'has-done': todo.done }">
                            <span class="nav-id">#{{ todo.id }}</span>
                            <span class="nav-title">{{ todo.title }}</span>
                            <span v-if="todo.done" class="nav-badge">완료</span>
                        </NuxtLink>

                        <div v-if="todoStore.todos.length === 0" class="empty-state">
                            <p class="text-secondary">아직 할 일이 없습니다</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import TodoBoard from '../../components/TodoBoard.vue'
import { useTodoStore } from '../../stores/todo'

const todoStore = useTodoStore()
</script>

<style scoped lang="scss">
.quick-nav-section {
    margin-top: 2ㅂrem;
}

.quick-nav-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
}

.quick-nav-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: white;
    border: 1px solid #eceffd;
    border-radius: 0.75rem;
    text-decoration: none;
    color: #4f46e5;
    font-weight: 500;
    transition: all 0.2s;

    &:hover {
        background: #eef2ff;
        border-color: #4f46e5;
        transform: translateY(-2px);
    }

    &.has-done {
        opacity: 0.6;
        background: #f0fdf4;
        border-color: #dcfce7;

        .nav-id {
            color: #6c757d;
        }

        .nav-title {
            text-decoration: line-through;
            color: #6c757d;
        }
    }
}

.nav-id {
    font-weight: 700;
    color: #4f46e5;
    min-width: 40px;
    font-size: 0.9rem;
}

.nav-title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #1f2937;
    font-size: 0.95rem;
}

.nav-badge {
    background: #dcfce7;
    color: #10b981;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
}

.empty-state {
    grid-column: 1 / -1;
    text-align: center;
    padding: 2rem;
    color: #6b7280;
}
</style>
