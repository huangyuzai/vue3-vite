<script setup lang="ts">
import { reactive, markRaw } from 'vue'

import UseMouseTest from  './UseMouseTest.vue'
import LifeTest from './LifeTest.vue'
import ToRefTest from './ToRefTest.vue'
import ToRawTest from './ToRawTest.vue'
import CustomRef from './CustomRefTest.vue'
import StoreTest from './StoreTest.vue'
import EmitTest from './EmitTest.vue'
// 如果是用 reactive 创建的响应式对象，使用 <component is> 时，需要使用 markRaw 将组件去除响应式
// const comp = reactive([markRaw(UseMouseTest)])
const comp = [UseMouseTest, LifeTest, ToRefTest, ToRawTest, CustomRef, StoreTest, EmitTest]

</script>

<template>
  <div class="div" v-for="item in comp">
    <h2>{{ item.__name }}</h2>
    <component :is="item" />
  </div>
</template>

<style>
.div {
  border: solid 1px #ececec;
  margin-bottom: 10px;
  padding: 0 10px 10px 10px;
}
.div h2 {
  text-align: left;
}
</style>
