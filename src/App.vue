<template>
  <div id="app" class="h-screen font-syne">
    <div id="header">
      <app-header></app-header>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    appHeader: Header
  }
}
</script>