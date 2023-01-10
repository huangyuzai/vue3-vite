<template>
  <div>toRef 测试</div>
</template>

<script setup>
import {ref, toRef} from 'vue'
const obj1 = {
  a: 1
}

const arr1 = [
  {
    a: [{
      c: 'cee'
    }]
  }
]

const arr = ref(arr1)
console.log(`arr==`, arr.value[0].a[0].c)

const obj2 = toRef(obj1.a)
console.log(obj2)
</script>
