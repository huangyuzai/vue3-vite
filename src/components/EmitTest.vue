<template>
  <div>
    <h4>父组件接收到按钮+1：{{ count }}</h4>
    <EmitChildTest @changeClick="handleClick" />
  </div>
</template>

<script setup lang="ts">
import EmitChildTest from './EmitChildTest.vue'
import {ref} from "vue";

const count = ref<number>(0)

const handleClick = () => {
  count.value++
}
</script>
