<template>
  <div @click="handleClick">login</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleClick = () => {
  localStorage.setItem("token", "aabb");
  router.replace({ path: "/" });
};
</script>

<style scoped lang="less"></style>
