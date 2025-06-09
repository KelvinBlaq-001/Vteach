<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner {
  border: 4px solid #e2e8f0;
  border-top: 4px solid #0ea5e9;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
