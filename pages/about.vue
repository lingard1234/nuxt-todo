<style scoped lang="scss">
.info-card {
  background: white;
  border: 1px solid #eceffd;
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.2s ease-in-out;
  text-align: center;

  &:hover {
    border-color: #4f46e5;
    box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.1);
    transform: translateY(-4px);
  }
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom:0.75rem;
  margin-top: 0;
}

.card-description {
  color: #6b7280;
  margin-bottom: 0;
  line-height: 1.6;
  font-size: 0.95rem;
}

.tech-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  display: inline-block;

  li {
    padding: 0.5rem 0;
    color: #6b7280;
    font-size: 0.95rem;
    border-bottom: 1px solid #eceffd;

    &:last-child {
      border-bottom: none;
    }

    &::before {
      content: '✓ ';
      color: #4f46e5;
      font-weight: 700;
      margin-right: 0.5rem;
    }
  }
}

.back-button {
  display: flex;
  justify-content: center;

  .btn {
    min-width: 180px;
  }
}
</style>

<template>
  <section class="page-section">
    <div class="page-header">
      <h1 class="page-title">프로젝트 소개</h1>
      <p class="page-subtitle">이 프로젝트의 구조와 기술 스택입니다</p>
    </div>

    <div class="grid-responsive">
      <div class="info-card">
        <div class="card-icon">📋</div>
        <h5 class="card-title">프로젝트</h5>
        <p class="card-description">
          Nuxt + Pinia + Bootstrap을 활용한<br>
          Todo 관리 웹 애플리케이션
        </p>
      </div>

      <div class="info-card">
        <div class="card-icon">🛠️</div>
        <h5 class="card-title">기술 스택</h5>
        <ul class="tech-list">
          <li>Nuxt 4.4.2</li>
          <li>Vue 3.5.30</li>
          <li>Pinia 3.0.4</li>
          <li>Bootstrap 5.3.8</li>
        </ul>
      </div>

      <div class="info-card">
        <div class="card-icon">📚</div>
        <h5 class="card-title">학습 내용</h5>
        <ul class="tech-list">
          <li>파일 기반 라우팅</li>
          <li>상태 관리 (Pinia Store)</li>
          <li>컴포넌트 재사용</li>
          <li>동적 라우팅</li>
        </ul>
      </div>
    </div>

    <div class="back-button mt-5">
      <NuxtLink to="/" class="btn btn-outline-primary">홈으로 돌아가기</NuxtLink>
    </div>
  </section>
</template>
