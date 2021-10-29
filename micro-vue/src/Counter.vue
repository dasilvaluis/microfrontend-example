<template>
  <div class="counter">
    <h1>Vue Counter</h1>
    <span>Count: {{ count }}</span>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { triggerEvent } from "./utils/events.js"

export default {
  name: "Counter",
  data() {
    return { triggerEvent, count: 0 };
  },
  methods: {
    increment() {
      this.count++;
      triggerEvent('countChange', { step: 1, count: this.count });
    },
    decrement() {
      this.count--;
      triggerEvent('countChange', { step: -1, count: this.count });
    },
  },
};
</script>