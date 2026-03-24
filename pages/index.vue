<template>
  <section class="page-section">
    <div class="hero mb-5">
      <div class="hero-content">
        <p class="hero-badge">Dashboard</p>
        <h1 class="hero-title">할 일 플래너</h1>
        <p class="hero-subtitle">효율적으로 할 일을 관리하세요</p>
      </div>

      <div class="hero-actions">
        <NuxtLink to="/todos" class="btn btn-primary">목록 보기</NuxtLink>
        <NuxtLink to="/about" class="btn btn-outline-secondary">소개</NuxtLink>
      </div>
    </div>

    <TodoBoard />
  </section>
</template>

<script setup lang="ts">
import TodoBoard from '../components/TodoBoard.vue'
</script>

<style scoped lang="scss">
.hero {
  background: linear-gradient(135deg, #ffffff 0%, #f4f6ff 100%);
  border: 1px solid #eceffd;
  border-radius: 1.5rem;
  padding: 3rem 2rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin-bottom: 2rem;
  }
}

.hero-content {
  margin-bottom: 2rem;
}

.hero-badge {
  display: inline-block;
  background: rgba(79, 70, 229, 0.1);
  color: #4f46e5;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 0;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.hero-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 0;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  .btn {
    flex: 1;
    min-width: 140px;

    @media (max-width: 768px) {
      flex: 1 1 calc(50% - 0.5rem);
    }
  }
}
</style>
