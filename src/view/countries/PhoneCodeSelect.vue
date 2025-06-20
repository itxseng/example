// PhoneCodeSelect.vue
<template>
  <div style="padding: 2rem">
    <h2>选择手机区号</h2>
    <el-select v-model="selectedCode" placeholder="请选择区号" filterable style="width: 300px">
      <el-option
          v-for="c in countries"
          :key="c.iso"
          :label="c.code"
          :value="c.code"
      >
        <span class="option">
          <img class="flag" :src="c.flag" :alt="c.name" />
          <span>{{ c.code }} ({{ c.zh || c.name }})</span>
        </span>
      </el-option>
    </el-select>
  </div>
</template>

<script setup>
import countries from './data/countries-with-zh.js';
import { ref } from 'vue';

const selectedCode = ref(null);
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
