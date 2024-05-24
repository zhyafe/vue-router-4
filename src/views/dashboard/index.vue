<template>
  <div>dashboard</div>
</template>

<script setup lang="ts">
import http from "../../utils/http.js";
console.log("🚀 ~ http:", http);
import { onMounted } from "vue";

onMounted(async () => {
  let res = await http.get({ url: "/api/object" });
  console.log("🚀 ~ res:", res);
});
</script>

<style scoped lang="less"></style>
