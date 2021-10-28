<template>
  <div class="counter">
    <h1>Vue Counter</h1>
    <span>Count: {{ count }}</span>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return { count: 0 };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>