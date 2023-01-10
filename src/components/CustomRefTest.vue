<template>
  <h4>CustomRefTest</h4>
  <input type="text" v-model="a">
  <p>值为：{{ a }}</p>
</template>

<script setup>
import { customRef } from 'vue'
function myRef (value) {
  // 有返回值，所以需要 return
  return customRef((track, trigger) => {
    return {
      get () {
        track() // 通知 vue 追踪数据的变化
        return value
      },
      // 一个新的参数，用于接收修改后的值
      set (newValue) {
        value = newValue // 将新值重新赋值给 value
        trigger() // 通知 vue 重新解析模板
      }
    }
  })
}

const a = myRef('aa')
</script>
