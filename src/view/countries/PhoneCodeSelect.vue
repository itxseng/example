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
    <div class="phone-input" v-if="selectedCode">
      <span class="prefix">{{ selectedCode }}</span>
      <input
          :placeholder="currentMask"
          :value="formattedPhone"
          @input="onPhoneInput"
      />
    </div>
  </div>
</template>

<script setup>
import countries from './data/countries-with-zh.js';
import { ref, computed } from 'vue';

const selectedCode = ref(null);
const phone = ref('');

const selectedCountry = computed(() =>
  countries.find(c => c.code === selectedCode.value)
);

const currentMask = computed(() => {
  const mask = selectedCountry.value?.mask;
  if (!mask) return '';
  return Array.isArray(mask) ? mask[0] : mask;
});

const maxDigits = computed(() => {
  const mask = selectedCountry.value?.mask;
  if (!mask) return Infinity;
  const masks = Array.isArray(mask) ? mask : [mask];
  return Math.max(
    ...masks.map(m => (m.match(/#/g) || []).length)
  );
});

function applyMask(value, mask) {
  if (!mask) return value;
  const digits = value.replace(/\D/g, '');
  const masks = Array.isArray(mask) ? mask : [mask];
  const targetMask =
    masks.find(m => digits.length <= m.replace(/[^#]/g, '').length) || masks[masks.length - 1];
  let result = '';
  let idx = 0;
  for (const ch of targetMask) {
    if (ch === '#') {
      if (idx < digits.length) {
        result += digits[idx++];
      }
    } else {
      result += ch;
    }
  }
  return result;
}

const formattedPhone = computed(() => applyMask(phone.value, selectedCountry.value?.mask));

function onPhoneInput(e) {
  const digits = e.target.value.replace(/\D/g, '');
  phone.value = digits.slice(0, maxDigits.value);
}
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

.phone-input {
  margin-top: 1rem;
  display: flex;
  align-items: center;
}

.phone-input .prefix {
  margin-right: 0.5rem;
  color: #333;
}

.phone-input input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
