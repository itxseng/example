// CountrySelect.vue
<template>
  <div style="padding: 2rem">
    <h2>选择国家</h2>
    <el-select v-model="selectedCountry" placeholder="请选择国家" filterable style="width: 300px">
      <el-option
          v-for="c in countries"
          :key="c.iso"
          :label="c.zh || c.name"
          :value="c.iso"
      >
        <span class="option">
          <img class="flag" :src="c.flag" :alt="c.name" />
          <span>{{ c.zh || c.name }} ({{ c.code }})</span>
        </span>
      </el-option>
    </el-select>
  </div>
</template>

<script setup>
import countries from './data/countries-with-zh.js';
import { ref } from 'vue';

const selectedCountry = ref(null);
</script>

<style scoped>
.el-select {
  margin-top: 1rem;
}
.option {
  display: flex;
  align-items: center;
}
.flag {
  width: 20px;
  height: 15px;
  margin-right: 0.5rem;
}
</style>
