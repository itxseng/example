// CountrySelect.vue
<template>
  <div style="padding: 2rem">
    <h2>选择国家</h2>
    <el-select v-model="selectedCountry" placeholder="请选择国家" filterable style="width: 300px">
      <el-option
          v-for="c in countries"
          :key="c.iso"
          :label="`${flag(c.iso)} ${c.zh || c.name}`"
          :value="c.iso"
      >
        <span>{{ flag(c.iso) }} {{ c.zh || c.name }} ({{ c.code }})</span>
      </el-option>
    </el-select>
  </div>
</template>

<script setup>
import countries from './data/countries-with-zh.js';
import { ref } from 'vue';

const selectedCountry = ref(null);

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
