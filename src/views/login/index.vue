<template>
  <div @click="handleClick">login</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
console.log("🚀 ~ route.params:", route.params);

const handleClick = () => {
  localStorage.setItem("token", "aabb");
  router.replace({ path: "/" });
};
</script>

<style scoped lang="less"></style>
