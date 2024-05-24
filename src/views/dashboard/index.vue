<template>
  <div>
    <div>dashboard</div>
    <div @click="handleClick">logout</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import http from "../../utils/http.js";
import { onMounted } from "vue";

const router = useRouter();

onMounted(async () => {
  let res = await http.get({ url: "/api/object" });
  console.log("🚀 ~ res:", res);
});

const handleClick = () => {
  localStorage.removeItem("token");
  router.replace({ name: "login" });
};
</script>

<style scoped lang="less"></style>
