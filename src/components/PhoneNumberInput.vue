<template>
  <div class="phone-input">
    <span v-if="code" class="prefix">{{ code }}</span>
    <input
      :placeholder="maskPlaceholder"
      :value="formattedValue"
      @input="handleInput"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  modelValue: { type: String, default: '' },
  mask: { type: [String, Array], default: '' },
  code: { type: String, default: '' }
});
const emit = defineEmits(['update:modelValue']);

const digits = ref(props.modelValue);

watch(() => props.modelValue, val => {
  digits.value = val || '';
});

const masks = computed(() => Array.isArray(props.mask) ? props.mask : [props.mask]);

const maxDigits = computed(() => {
  return Math.max(...masks.value.map(m => (m.match(/#/g) || []).length), 0);
});

function applyMask(value) {
  const maskArr = masks.value;
  if (!maskArr.length) return value;
  const digitStr = value.replace(/\D/g, '');
  const target = maskArr.find(m => digitStr.length <= (m.match(/#/g) || []).length) || maskArr[maskArr.length - 1];
  let out = '';
  let i = 0;
  for (const ch of target) {
    if (ch === '#') {
      if (i < digitStr.length) out += digitStr[i++];
    } else {
      out += ch;
    }
  }
  return out;
}

const formattedValue = computed(() => applyMask(digits.value));

const maskPlaceholder = computed(() => masks.value[0] || '');

function handleInput(e) {
  const onlyDigits = e.target.value.replace(/\D/g, '');
  digits.value = onlyDigits.slice(0, maxDigits.value);
  emit('update:modelValue', digits.value);
}
</script>

<style scoped>
.phone-input {
  display: flex;
  align-items: center;
  margin-top: 1rem;
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
