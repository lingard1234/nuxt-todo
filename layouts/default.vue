<template>
  <div class="app-shell">
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom">
      <div class="container-app-nav">
        <NuxtLink to="/" class="navbar-brand">
          <span class="brand-icon">✓</span>
          <span class="brand-text">Todo</span>
        </NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto gap-2">
            <li class="nav-item">
              <NuxtLink to="/todos" class="nav-link fw-500">목록</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about" class="nav-link fw-500">소개</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <div class="container-app">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: #ffffff !important;
  border-color: #eceffd !important;
  box-shadow: 0 1px 3px rgba(31, 41, 55, 0.05);
  padding: 1rem 0;
}

.container-app-nav {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #4f46e5 !important;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
}

.brand-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
}

.brand-text {
  color: #1f2937;
}

.nav-link {
  color: #6b7280 !important;
  transition: all 0.2s;
  padding: 0.5rem 1rem !important;
  border-radius: 0.5rem;

  &:hover {
    color: #4f46e5 !important;
    background: #eef2ff;
  }
}

.main-content {
  flex: 1;
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
}

.container-app {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
