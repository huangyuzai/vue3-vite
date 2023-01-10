<template>
  <div>
    <p>鼠标位置：{{ x }}, {{ y }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMouse } from "../hooks/useMouse"

const {x, y} = useMouse()
</script>
