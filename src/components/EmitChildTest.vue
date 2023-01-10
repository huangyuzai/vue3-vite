<template>
  <button @click="handleClick">子组件按钮 +1</button>
</template>

<script setup lang="ts">
const emits = defineEmits(['changeClick'])

const handleClick = () => {
  emits('changeClick')
}

</script>

<style scoped>

</style>
