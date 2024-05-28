<template>
  <div>
    <div>userList</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted } from "vue";
const route = useRoute();

onMounted(() => {
  console.log("route.params", route.params);
});
</script>

<style scoped lang="less"></style>
