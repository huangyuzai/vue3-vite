<template>
  <h4>ToRawTest</h4>
</template>

<script setup>
import { reactive, toRaw, markRaw, isReactive } from 'vue'
const obj = reactive({
  a: 1,
  b: 2,
  c: {
    d: 4
  }
})

const obj2 = {
  foo: 'foo',
  bar: 'bar'
}

console.log(toRaw(obj)) // 返回原始对象
console.log(markRaw(obj2)) // 将数据标记为不可被代理
console.log(isReactive(reactive(obj2))) // 由于被标记为永远不可被代理，所以这里会返回 false
</script>
