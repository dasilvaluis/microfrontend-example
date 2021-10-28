<style scoped>
.vue-app {
  margin: 4rem;
}
</style>

<template>
<div class="vue-app">
  <Counter />
</div>
</template>

<script>
import Counter from './Counter.vue';

export default {
  components: {
    Counter,
  }
}
</script>