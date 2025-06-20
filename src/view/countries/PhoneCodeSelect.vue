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
    <PhoneNumberInput
        v-if="selectedCode"
        v-model="phone"
        :code="selectedCode"
        :mask="selectedCountry?.mask"
    />
  </div>
</template>

<script setup>
import countries from './data/countries-with-zh.js';
import { ref, computed } from 'vue';
import PhoneNumberInput from '../../components/PhoneNumberInput.vue';

const selectedCode = ref(null);
const phone = ref('');

const selectedCountry = computed(() =>
  countries.find(c => c.code === selectedCode.value)
);
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
