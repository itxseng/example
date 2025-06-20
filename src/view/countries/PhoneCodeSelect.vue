// PhoneCodeSelect.vue
<template>
  <div style="padding: 2rem">
    <h2>选择手机区号</h2>
    <el-select v-model="selectedCode" placeholder="请选择区号" filterable style="width: 300px">
      <el-option
          v-for="c in countries"
          :key="c.iso"
          :label="`${flag(c.iso)} ${c.code}`"
          :value="c.code"
      >
        <span>{{ flag(c.iso) }} {{ c.code }} ({{ c.zh || c.name }})</span>
      </el-option>
    </el-select>
  </div>
</template>

<script setup>
import countries from './data/countries-with-zh.js';
import { ref } from 'vue';

const selectedCode = ref(null);

function flag(iso) {
  return [...iso.toUpperCase()]
      .map(ch => String.fromCodePoint(127397 + ch.charCodeAt()))
      .join('');
}
</script>

<style scoped>
.el-select {
  margin-top: 1rem;
}
</style>
