<template>
  <span :style="{ color: value || value === 0 ? '#333333' : '#d6d6d6' }">
    {{ value || value === 0 ? value : '—' }}
  </span>
</template>

<script>
export default {
  props: ['value'],
};
</script>
