<template>
  <div>测试 store （pinia版本）</div>
  <h4>store中 count 的值为：{{ count }}</h4>
  <h4>store中的 count2 的值：{{ count2 }}</h4>
  <h4>计算后的 newCount [useCounterStore] 值为：{{ newCount }}</h4>
  <h4>选项式创建的 store 的count值为：{{ defaultStore.count }}</h4>
  <button @click="handleClick">点击新增</button>
  <button @click="handleReset">重置 state</button>
  <button @click="handleClickMore">批量修改多个属性</button>
  <br>
  <button @click="handleClick2">新增 defaultStore 的值</button>
  <button @click="handleClick3">重置 defaultStore 的值</button>
  <button @click="handleClick4">输出 defaultStore</button>
  <button @click="handleClick5">重置 pinia 的所有 store </button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {useStore} from "../store";
import useCounterStore from "../store/useCounterStore";
const store = useStore()
/* 解构写法 */
const {count, count2} = storeToRefs(store)
const handleClick = () => {
  // console.log(store.newCount)
  store.add()
}

const handleReset = () => {
  /* setup风格定义的 store 不能使用 $reset() 方法 */
  store.$reset()
}

const handleClickMore = () => {
  /* 批量修改多个属性 */
  store.$patch({
    count: store.count += 2,
    count2: store.count *= 3
  })
}

const _useCounterStore = useCounterStore()
const { count: newCount } = storeToRefs(_useCounterStore)

/* 选项式创建的 store */
import useDefaultStore from "../store/useDefaultStore";
const defaultStore = useDefaultStore()

const handleClick2 = () => {
  defaultStore.add()
}
const handleClick3 = () => {
  defaultStore.$reset()
}

const handleClick4 = () => {
  console.log(defaultStore.$state)
  /*defaultStore.$patch({
    count: 2,
    isAdd: true
  })*/
  console.log(defaultStore.$state)
}

const watchDefaultStore = (mutation, state) => {
  console.log('选项卡创建的 store 更新了', mutation, state)
}
/* 订阅 state */
defaultStore.$subscribe(watchDefaultStore)

const handleClick5 = () => {
  defaultStore.$log()
  // console.log(defaultStore.$init())
}

</script>
