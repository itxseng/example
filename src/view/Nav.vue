// Nav.vue
<template>
  <el-menu mode="horizontal" router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/country">国家选择器</el-menu-item>
  </el-menu>
</template>

<script setup>
// 无需额外逻辑，router 配合 el-menu 使用
</script>

<style scoped>
.el-menu {
  border-bottom: none;
}
</style>
