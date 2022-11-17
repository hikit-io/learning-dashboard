<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<template>
  <Header></Header>
  <router-view v-slot="{Component}">
    <transition name="slide-fade">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
</style>
